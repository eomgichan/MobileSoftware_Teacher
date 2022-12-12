import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Pages/Login'
import FindPassword from './Pages/FindPassword'
import Signup from './Pages/SignUp'
import Main from './Pages/Main'

const Stack = createStackNavigator();

 export default function App() {
   return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name = "Login" component = {Login}/>
        <Stack.Screen name = "FindPassword" component = {FindPassword}/>
        <Stack.Screen name = "Signup" component = {Signup}/>
        <Stack.Screen name = "Main" component = {Main}/>
       </Stack.Navigator>
     </NavigationContainer>
   );
 }
