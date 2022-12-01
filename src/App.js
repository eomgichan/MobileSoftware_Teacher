import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Pages/Login'
import FindId from './Pages/FindId'
import FindPassword from './Pages/FindPassword'
import Signup from './Pages/Signup'
import Main from './Pages/Main'
import StudentInformation from './Pages/StudentInfomation'

const Stack = createStackNavigator();

 export default function App() {
   return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName='Main'>
         <Stack.Screen name = "Login" component = {Login}/>
         <Stack.Screen name = "FindId" component = {FindId}/>
         <Stack.Screen name = "FindPassword" component = {FindPassword}/>
         <Stack.Screen name = "Signup" component = {Signup}/>
         <Stack.Screen name = "Main" component = {Main}/>
         <Stack.Screen name = "StudentInformation" component = {StudentInformation}/>
       </Stack.Navigator>
     </NavigationContainer>
   );
 }
