import {View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import {useState} from 'react';
import {db} from '../firebaseConfig'
import {
    addDoc, collection, getDocs,
     doc, updateDoc, where, query} from "firebase/firestore";

const Login = (props) => {
    const [Flag,setFlag] = useState(true);
    const [Id, setID] = useState("");
    const [Password, setPassword] = useState("");
    const [TeacherInfo, setTeacherInfo] = useState();
    
    const readfromDB = async() => {
        try{
            const data = await getDocs(collection(db, "Teacher Information"))
            
            setTeacherInfo(data.docs.map(doc=>(
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

    if (Flag) {
        readfromDB()
        setFlag(false)
    }

    const GoMain = () => {
        let check = false
        TeacherInfo?.map((item) => {
            if (item.teacherid == Id &&
                item.Password == Password) {
                    have = true
                    props.navigation.navigate("Main")
            }
        })
        if (!check) {
            alert("Incorrect Id or Password")
        }
    }
    return (
        <View style = {styles.LoginLocation}>
            <TextInput
            value = {Id}
            onChangeText = {changeID}
            />
            <TextInput
            value = {Password}
            onChangeText = {changePassword}
            />
            <TouchableOpacity
                onPress={GoMain}>
                    <Text>Log In</Text>
                </TouchableOpacity>
            <View style = {{
                flexDirection: 'row'
            }}>
                <TouchableOpacity
                    onPress={()=>{
                        props.navigation.navigate("FindId")
                    }}>
                    <Text>Find Id</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>{
                        props.navigation.navigate("FindPassword")
                    }}>
                    <Text>Find Password</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={()=>{
                        props.navigation.navigate("Signup")
                    }}>
                    <Text>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    LoginLocation: {
      width:'70',
      marginTop:200,
      marginLeft :200,
      marginRight:200,
      fontSize:25,
      padding:10
    },
  });

export default Login;