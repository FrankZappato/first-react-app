import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, ScrollView, Alert } from 'react-native';
import Logo from '../components/Logo';
import { Input } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function SignUp ({navigation}){     
   const [state, setstate] = useState({
       nombre : "",
       apellido : "",
       email : "",
       edad : "",
       dni : ""
   });

   const [validations,setValid] = useState({ 
        isValidName : false,
        isValidLastName : false,
        isValidEmail : false,
        isValidDate : false,
        isValidDNI : false
   });  
   
   /*const [date, setDate] = useState(new Date(1598051730000));
   const [mode, setMode] = useState('calendar');
   const [show, setShow] = useState(false);

   const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('calendar');
  };
  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    console.log(date)
  };
    <View>
        <View>
        <Button onPress={showDatepicker} title="Show date picker!" />
        </View>            
        {show && (
        <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChangeDate}
        />
        )}
    </View>*/


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
       console.log(val.lenght)    
       if(val.lenght !== '0'){
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
    if(val.lenght !== 0){
        setValid({
            ...validations,
            isValidDate : true
        })
    }else{
        setValid({
            ...validations,
            isValidDate : false 
        })
    }
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

   let errorsArr = []

   const validateAll = ()=>{  
       errorsArr = [];        
       Object.entries(validations).forEach(([key,val]) =>{
           if(!val){
               errorsArr.push(key.replace('isValid', ''))
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