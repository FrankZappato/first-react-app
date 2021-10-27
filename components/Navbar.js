import { StatusBar } from 'expo-status-bar';
import  * as React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import SignUp from '../screens/SignUp';
import Profile from '../screens/Profile';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'

const Stack = createNativeStackNavigator();
const TopStack = createMaterialTopTabNavigator();

export default function Navbar({}) {
    return (        
      <NavigationContainer>
      <TopStack.Navigator
        initialRouteName="Home"
      >
        <TopStack.Screen name="Home" children={Home}/>
        <TopStack.Screen name="Sign Up" children={stackSignUp}/>
      </TopStack.Navigator>
    </NavigationContainer>   
    );
  }  

  
  function stackSignUp(){
    return(
      <Stack.Navigator>
        <Stack.Screen 
        name="Sign up screen"
        component={SignUp}/>        
        <Stack.Screen 
        name="Profile"
        component={Profile}/>        
      </Stack.Navigator>
    );
  }
  
  
  const styles = StyleSheet.create({    
    
  });