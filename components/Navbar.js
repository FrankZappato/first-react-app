import { StatusBar } from 'expo-status-bar';
import  * as React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../components/Home';
import SignUp from '../components/SignUp';

const Stack = createNativeStackNavigator();

export default function Navbar({navigation}) {
    return (
        <View>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Sign Up" component={SignUp} />
            </Stack.Navigator>                
        </NavigationContainer>
        <Button
            title="Sign Up!"
            onPress={()=> this.props.navigation.navigate('Sign Up')}
            />
        <Button
            title="Home!"
            onPress={()=> this.props.navigation.navigate('Home')}/> 
      </View>
      
    );
  }
  /**<NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Sign Up" component={SignUp}/>
      </Stack.Navigator>  
    </NavigationContainer> */
  
  const styles = StyleSheet.create({    
    logo :{
      width:300,
      height:120
    }
  });