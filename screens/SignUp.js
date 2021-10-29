import React, { useState } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Image, Button, TextInput, ScrollView, Animated } from 'react-native';
import Logo from '../components/Logo';
import { useNavigation } from '@react-navigation/core';

//const navigation = useNavigation();

export default function SignUp ({navigation}){     
   const [state, setstate] = useState({
       nombre : "",
       apellido : "",
       email : "",
       edad : "",
       dni : ""
   });

   const [validations,setValid] = useState({ 
        isValidName : true,
        isValidLastName : true,
        isValidEmail : true,
        isValidDate : true,
        isValidDNI : true
   });

   const emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
   const dniRegex = new RegExp(/^\d{8}(?:[-\s]\d{4})?$/);
   /*const handleChange = (event,type)=>{       
       setstate((currentState)=>{return{
           ...state,[type] : event.nativeEvent.text
           
       }})
       console.log(state)
   }*/

   const handleInput = (val,key) =>{    
        setstate({
            ...state,
            [key] : val,               
        });
        validate(val,key);
   }

   const validate = (val,key)=>{
       if(key === 'nombre'){
            checkNameInput(val)
       }
       if(key === 'apellido'){
           checkLastNameInput(val)
       }
       if(key === 'email'){
           checkEmailInput(val)
       }
       if(key === 'edad'){
           checkAgeInput(val)
       }
       if(key === 'dni'){
           checkDNIInput(val)
       }
   }

   const checkNameInput = (val) =>{       
       if(val.lenght !== 0){
           setValid({
               ...validations,
               isValidName : true
           })
       }else{
           setValid({
               ...validations,
               isValidName : false 
           })
       }
   }
   const checkLastNameInput = (val) =>{       
       if(val.lenght !== 0){
           setValid({
               ...validations,
               isValidLastName : true
           })
       }else{
           setValid({
               ...validations,
               isValidLastName : false 
           })
       }
   }   
   
   const checkAgeInput = (val) =>{

   }
   const checkDNIInput = (val) =>{
        if(dniRegex.test(val)){
            setValid({
                ...validations,                
                isValidDNI : true
            })
        }else{
            setValid({
                ...validations,                
                isValidDNI : false
            })
        }
   }
   const checkEmailInput = (val)=>{
        if(emailRegex.test(val)){
            setValid({
                ...validations,
                
                isValidEmail : true
            });
        }else{
            setValid({
                ...validations,                
                isValidEmail : false
            });
        }       
   }
    return (        
        <ScrollView style={styles.formContainer}>
            <Logo/>
            <Text>Sign up!</Text>   
            <TextInput
                placeholder=" Nombre"
                style={styles.formInput}
                onChangeText={(val)=>handleInput(val,'nombre')}                
            />
            {validations.isValidName ? null : 
            <View duration={500}>           
                <Text>Nombre debe contener al menos 4 caracteres</Text>     
            </View>       
            }
            <TextInput
                placeholder=" Apellido"
                style={styles.formInput}
                onChangeText={(val)=>handleInput(val, 'apellido')}
            />
            <TextInput
                placeholder=" Email"
                style={styles.formInput}
                onChangeText={(val)=>handleInput(val,'email')}
            />
            <TextInput
                placeholder=" Fecha de nacimiento"
                style={styles.formInput}
                onChangeText={(val)=>handleInput(val,"edad")}
            />
            <TextInput
                placeholder=" DNI"
                style={styles.formInput}
                onChangeText={(val)=>handleInput(val,'dni')}
            />            
        <Button 
            title="Sign Up"
            onPress={() =>
                  navigation.navigate('Sign Up', {
                  screen: 'Profile',
                  params: { data: {state,validations} },
                })
              }
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