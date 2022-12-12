import {View, TextInput, Text, Button} from 'react-native'
import {db} from '../firebaseConfig'
import {
    addDoc, collection, getDocs,
     doc, updateDoc, where, query} from "firebase/firestore";
import {useState} from 'react'

const Main =  (props) => {
    const [teacherInfo, setStudentInfo] = useState();
    const [Flag,setFlag] = useState(true);

    const readfromDB = async () => {
        try{
            const data = await getDocs(collection(db, "teacher"))
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
            {teacherInfo?.map((item, idx) => {
                return(
                    <Text>
                        <Text>{item.name}</Text>
                        <Text>{item.phonenumber}</Text>
                        <Text>{item.classnumber}</Text>
                    </Text>
                )
            })}
        </View>
    );
}

export default Main;
