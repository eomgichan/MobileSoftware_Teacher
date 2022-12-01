import {View, TextInput, Text, Button} from 'react-native'
import {db} from '../firebaseConfig'
import {
    addDoc, collection, getDocs,
     doc, updateDoc, where, query} from "firebase/firestore";
import {useState} from 'react'
import { TouchableOpacity } from 'react-native';

const Main =  (props) => {
    const [studentInfo, setStudentInfo] = useState();
    const [Flag,setFlag] = useState(true);

    const readfromDB = async () => {
        try{
            const data = await getDocs(collection(db, "student"))
            setStudentInfo(data.docs.map(doc => ({ ...doc.data(), id: doc.id})));
        } catch(error) {
            console.log(error.message)
        }
    }

    if(Flag){
        readfromDB()
        setFlag(false)
    }

    return (
        <View>
            {studentInfo?.map((item, idx) => {
                return(
                        <Text>{item.name}</Text>
                )
            })}
        </View>
    );
}

export default Main;