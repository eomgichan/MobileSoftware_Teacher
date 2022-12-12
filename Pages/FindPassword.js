import {TouchableOpacity, Text, View, TextInput, Image} from 'react-native';
import {useState} from 'react';
import {db} from '../firebaseConfig'
import {
    addDoc, collection, getDocs,
     doc, updateDoc, where, query} from "firebase/firestore";
import find from '../assets/find.png'

const FindPassword = (props) => {
    const [flag,setFlag] = useState(true);
    const [name, setName] = useState("");
    const [ID, setID] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const [teacherInfo, setStudentInfo] = useState();

    const readfromDB = async() => {
        try{
            const data = await getDocs(collection(db, "teacher"))
            
            setStudentInfo(data.docs.map(doc=>(
                {...doc.data(), id: doc.id}
                )))
        } catch(error) {
            console.log(error.message)
        }
    }

    const changeID = (event => {
        setID(event)
    })

    const changeName = (event) => {
        setName(event)
    }  

    const changeemail = (event) => {
        setEmail(event)
    }  
    if (flag) {
        readfromDB()
        setFlag(false)
    }

    const findIdNumber = async () => {
        teacherInfo?.map((item) => {
            if (item.id == ID &&
                item.name == name) {
                    setPassword(item.password)
                }
        })
    }

    return (
        <View>
            <View
                style ={{marginTop:130, marginLeft :'35%', marginRight:20, backgroundColor:'#FBFAFA', width: 390, height:250}}>
                <Text
                    style={{marginLeft:10, fontSize:15}}
                >Enter your ID</Text>
                <TextInput
                    value = {ID}
                    onChangeText = {changeID}
                    style ={{marginLeft:10, width:'100%', marginTop:10}}
                />
                <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    marginLeft:10,
                    marginRight:10
                }}
                />
                <Text
                    style={{marginLeft:10, marginTop:10, fontSize:15}}
                >Enter your Name</Text>
                <TextInput
                    value = {name}
                    onChangeText = {changeName}
                    style ={{marginLeft:10, width:'100%', marginTop:10}}
                />
                <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    marginLeft:10,
                    marginRight:10
                }}
                />
                <Text
                    style={{marginLeft:10, marginTop:10, fontSize:15}}
                >Enter your Email</Text>
                <TextInput
                    value = {email}
                    onChangeText = {changeemail}
                    style ={{marginLeft:10, width:'100%', marginTop:10}}
                />
                <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    marginLeft:10,
                    marginRight:10
                }}
                />
                <Text
                    style = {{marginLeft: 10,marginTop:10, fontSize : 15}}
                >your password : {password}</Text>
            </View>
            <TouchableOpacity
                style = {{width:100}}
                onPress={findIdNumber}>
                    <Image
                        style={{width:390, height:100, marginLeft:'550%'}}
                        source={find}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
        </View>
    );
}

export default FindPassword
