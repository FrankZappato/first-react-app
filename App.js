import { StatusBar } from 'expo-status-bar';
import  * as React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import Home from './components/Home';
import SignUp from './components/SignUp';
import Logo from './components/Logo';


const Stack = createNativeStackNavigator();
const TopStack = createMaterialTopTabNavigator();

export default function App() {
  return (    
    <NavigationContainer>
      <TopStack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Sign Up" component={SignUp}/>        
      </TopStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop : 15
    //justifyContent: 'center',
  },
  logo :{
    width:300,
    height:120
  }
});
