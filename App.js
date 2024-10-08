// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screens/Home';         
import Menu from './Screens/Menu';          
import Desserts from './Screens/Desserts';   
import MainCourse from './Screens/MainCourse'; 
import Starters from './Screens/Starters';   
import Login from './Screens/Login';         
import ChefAddMenu from './Screens/ChefAddMenu'; 


// Create a stack navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{headerShow: false}} />
        <Stack.Screen name="Home" component={Home} options={{headerShow: false}} />
        <Stack.Screen name="Menu" component={Menu} options={{headerShow: false}} />
        <Stack.Screen name="Desserts" component={Desserts} options={{headerShow: false}} />
        <Stack.Screen name="MainCourse" component={MainCourse} options={{headerShow: false}} />
        <Stack.Screen name="Starters" component={Starters} options={{headerShow: false}} />
        <Stack.Screen name="ChefAddMenu" component={ChefAddMenu} options={{headerShow: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
