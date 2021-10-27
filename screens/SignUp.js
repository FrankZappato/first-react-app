import React, { useState } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Image, Button, TextInput, ScrollView } from 'react-native';
import Logo from '../components/Logo';
import { useNavigation } from '@react-navigation/core';

//const navigation = useNavigation();

export default function SignUp({navigation}){  
   const [state, setstate] = useState({
       nombre : "",
       apellido : "",
       email : "",
       edad : "",
       dni : ""
   })
   const handleChange = (event,type)=>{
       
       setstate((currentState)=>{return{
           ...state,[type] : event.nativeEvent.text
           
       }})
       console.log(state)
   }
    return (        
        <ScrollView style={styles.formContainer}>
            <Logo/>
            <Text>Sign up!</Text>   
            <TextInput
            placeholder=" Nombre"
            style={styles.formInput}
            onChange={(event)=>handleChange(event,"nombre")}
            />
            <TextInput
            placeholder=" Apellido"
            style={styles.formInput}
            />
            <TextInput
            placeholder=" Email"
            style={styles.formInput}
            />
            <TextInput
            placeholder=" Fecha de nacimiento"
            style={styles.formInput}
            />
            <TextInput
            placeholder=" DNI"
            style={styles.formInput}
            />            
        <Button 
            title="Sign Up"
            onPress={()=>{navigation.navigate("Profile")}}
        />
        </ScrollView>
    ); 
}

const styles = StyleSheet.create({
    formContainer : {
        margin : 20,
        marginTop : 80,       
        alignContent : 'center'
    },
    formInput : {
        borderWidth : 2,
        borderRadius : 5,
        borderColor : '#007A7A',
        margin : 15
    }     
  });