import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Screens/Login';
import Home from './Screens/Home';
import ChefAddMenu from './Screens/ChefAddMenu';
import GuestFilter from './Screens/GuestFilter';
import Starters from './Screens/Starters';
import MainCourse from './Screens/MainCourse';
import Desserts from './Screens/Desserts';

const Stack = createStackNavigator();

export default function App() {
  const [menu, setMenu] = useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home">
          {(props) => <Home {...props} menu={menu} />}
        </Stack.Screen>
        <Stack.Screen name="ChefAddMenu">
          {(props) => <ChefAddMenu {...props} menu={menu} setMenu={setMenu} />}
        </Stack.Screen>
        <Stack.Screen name="GuestFilter">
          {(props) => <GuestFilter {...props} menu={menu} />}
        </Stack.Screen>
        <Stack.Screen name="Starters">
          {(props) => <Starters {...props} menu={menu} />}
        </Stack.Screen>
        <Stack.Screen name="MainCourse">
          {(props) => <MainCourse {...props} menu={menu} />}
        </Stack.Screen>
        <Stack.Screen name="Desserts">
          {(props) => <Desserts {...props} menu={menu} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

