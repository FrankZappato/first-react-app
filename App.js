import  * as React from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'

import Navbar from './components/Navbar';


const Stack = createNativeStackNavigator();
const TopStack = createMaterialTopTabNavigator();

export default function App() {
  return (    
    <Navbar/>
  );
}

const styles = StyleSheet.create({  
});
