import {TouchableOpacity, Text, View, TextInput, Image, ImageBackground} from 'react-native';
import {useState} from 'react';
import {db} from '../firebaseConfig'
import {
    addDoc, collection, getDocs,
     doc, updateDoc, where, query} from "firebase/firestore";
import signup from '../assets/Signup.png'

const Find = (props) => {
    const [flag,setFlag] = useState(true);
    const [name, setName] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
    const [ID, setID] = useState();
    const [password, setPassword] = useState();
    const [teacherInfo, setStudentInfo] = useState();
    const [email, setEmail] = useState("");

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

    const changeID = (event) => {
        setID(event)
    }

    const changePassword = (event) => {
        setPassword(event)
    }

    const changeName = (event) => {
        setName(event)
    }

    const changeEmail = (event) => {
        setEmail(event)
    }

    const changePhoneNumber = (event) => {
        setPhoneNumber(event)
    }
    if (flag) {
        readfromDB()
        setFlag(false)
    }

    const signupteacher = async () => {
        let infoList = []
        teacherInfo?.map((item) => {
            infoList.push(item.teacher_id)
            infoList.push(item.password)
            infoList.push(item.name)
            infoList.push(item.PhoneNumber)
            infoList.push(item.email)
        })
        try {
            await addDoc(collection(db, "teacher"), {
                teacher_id : ID,
                Password : password,
                name : name,
                PhoneNumber : PhoneNumber,
                email : email
            })
            alert("Sign Up Complete!")
            props.navigation.navigate("Login")
        }catch(error) {
            console.log(error.message)
        }
    }

    return (
        <View>
            <View
                style ={{marginTop:130, marginLeft :'35%', marginRight:20, backgroundColor:'#FBFAFA', width: 390, height:300}}>
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
                >Enter your Password</Text>
                <TextInput
                    value = {password}
                    onChangeText = {changePassword}
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
                    style={{marginLeft:10, fontSize:15}}
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
                    style={{marginLeft:10, fontSize:15}}
                >Enter your Email</Text>
                <TextInput
                    value = {email}
                    onChangeText = {changeEmail}
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
                    style={{marginLeft:10, fontSize:15}}
                >Enter your Phone Number</Text>
                <TextInput
                    value = {PhoneNumber}
                    onChangeText = {changePhoneNumber}
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
            </View>
            <TouchableOpacity
                style = {{width:100}}
                onPress={signupteacher}>
                    <Image
                        style={{width:390, height:100, marginLeft:'550%'}}
                        source={signup}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
        </View>
    );
}

export default Find
