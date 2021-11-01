import React, { useState } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Image, Button, TextInput, ScrollView, Animated, Alert } from 'react-native';
import Logo from '../components/Logo';
import { useNavigation } from '@react-navigation/core';
import { Input } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
//import DatePicker from 'react-native-date-picker';

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

  // const [date,setDate] = useState(new Date())


   const emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
   const dniRegex = new RegExp(/^\d{8}(?:[-\s]\d{4})?$/);   

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

   const errorsArr = []

   const validateAll = ()=>{          
       Object.entries(validations).forEach(([key,val]) =>{
           if(!val){
               errorsArr.push(key)
           }
       })      
   }
   const validData = ()=>{  
       validateAll() 
       console.log(errorsArr.length) 
       return errorsArr.length === 0
   }

   const showError = ()=>{       
       Alert.alert(
        "Input Error",  
        "Datos invalidos "+ errorsArr,      
        [
          {
            text: "Cancel",           
            style: "cancel",
          },
        ],
        {
          cancelable: true,
        }
      );
       errorsArr.forEach(error =>{
           console.log(error);
       })      
   }

    return (        
        <ScrollView style={styles.formContainer}>
            <View style={styles.headerContainer}>
                <Logo/>
                <Text style={styles.title}>Sign up!</Text>   
            </View>
            <Input
                label="Nombre"
                placeholder=" Nombre"
                style={styles.formInput}
                onChangeText={(val)=>handleInput(val,'nombre')}
                                         
            />        
            
            <Input
                label="Apellido"
                placeholder=" Apellido"
                style={styles.formInput}
                onChangeText={(val)=>handleInput(val, 'apellido')}
            />
            <Input
                label="Email"
                placeholder=" Email"
                style={styles.formInput}
                onChangeText={(val)=>handleInput(val,'email')}
            />
            <Input
                label="Fecha de nacimiento"
                placeholder=" Fecha de nacimiento"
                style={styles.formInput}
                onChangeText={(val)=>handleInput(val,"edad")}
            />      
              
            <Input
                label =" DNI"
                placeholder=" DNI"
                style={styles.formInput}
                onChangeText={(val)=>handleInput(val,'dni')}
            />          
        <Button 
            title="Sign Up"
            onPress={() => 
                {                    
                    if(validData()){                        
                        navigation.navigate('Sign Up', {
                        screen: 'Profile',
                        params: { data: {state,validations} },
                        })
                    }else{                        
                        showError();
                    }
                }                
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
    },
    headerContainer : {
        justifyContent : 'center',      
        alignItems : 'center'
      },
    title : {
        fontWeight : 'bold',
        fontSize : 20
    }    
  });