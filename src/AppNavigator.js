import { View, Text } from 'react-native'
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './screens/Splash';
import Login from './screens/Login';
import SignUp from './screens/SignUp';

const Stack = createStackNavigator();

const  AppNavigator =() =>{
  return (
    <NavigationContainer>
    <Stack.Navigator><Stack.Screen 
            options={{headerShown:false}}
            name="Splash"
            component={Splash}/>
            <Stack.Screen options={{headerShown:false}} name="Login"  component={Login}/>
            <Stack.Screen options={{headerShown:false}} name="SignUp"  component={SignUp}/>
            <Stack.Screen options={{headerShown:false}} name="Home"  component={Home}/> 
      {/* <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigator;