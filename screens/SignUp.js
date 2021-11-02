import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Alert, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import Logo from '../components/Logo';
import { Input } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import Spinner from 'react-native-loading-spinner-overlay';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SignUp ({navigation}){     
   const [state, setState] = useState({
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
   
   /**
    * loading para el spinner.
    */
    const [loading, setLoading] = useState(false);
   /**
    * timeOut de 3 secs para navegar una ves validado que no haya errores en el form.
    */
    const startLoading = () => {
        setLoading(true);
        setTimeout(() => {
            navigation.navigate('Sign Up', {
                screen: 'Profile',
                params: { data: {state,validations} },
            })
            setLoading(false);
        }, 3000);
    };

    /**
     * DatePicker 
     */
    const [date, setDate] = useState(new Date());    
    const [show, setShow] = useState(false);
   
    const onChangeDate = (event, selectedDate) => {       
        setShow(false);        
        setDate(selectedDate);
        setState({
            ...state,
            edad : moment(selectedDate).format('DD/MM/YYYY')
        });
        setValid({
            ...validations,
            isValidDate : true
        })                    
    };    

    /**
     * RegEx para filtrar y validar emails y DNI
     */
   const emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
   const dniRegex = new RegExp(/^\d{8}(?:[-\s]\d{4})?$/);   
    
   /**
    * 
    * @param {*Input Value} val 
    * @param {*Key del obj state} key 
    * handler para modificar los valores del obj "state" desde los inputs del form
    */
   const handleInput = (val,key) =>{    
        setState({
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

   /**
    * array de errores que va a mostrar el modal si los hay luego de validar todos.
    */
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
            <View style={styles.formInputContainer}>
                <Text style={styles.formTitle}>Fecha de Nacimiento</Text>
                <View style={styles.formDateContainer}> 
                    <TextInput                        
                        label = "Fecha de Nacimiento"
                        style={styles.formInputDate}
                        placeholder = 'DD/MM/YYYY'
                        value = {state.edad}                        
                    />        
                    <Button 
                        icon={
                            <Icon
                            name="calendar"
                            size={22}
                            color="#007A7A"
                            />
                        }
                        buttonStyle={styles.calendarBtn}
                        type = 'outline'                        
                        onPress={()=>setShow(true)} 
                    />
                </View>
            </View> 

            <View>                           
                {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={'calendar'}
                    is24Hour={true}
                    display="default"
                    onChange={onChangeDate}
                />
                )}
            </View>   
                   
              
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
                        startLoading()    
                    }else{                        
                        showError();
                    }
                }                
            }
        />        
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <Spinner                
                visible={loading}                
                textContent={'Loading...'}                
                textStyle={styles.spinnerTextStyle}
                />                
            </View>
            </SafeAreaView>
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
        margin : 15,
        
    },
    headerContainer : {
        justifyContent : 'center',      
        alignItems : 'center'
      },
    title : {
        fontWeight : 'bold',
        fontSize : 20
    } ,
    container: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        paddingTop: 30,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    spinnerTextStyle: {
        color: '#FFF',
    }, 
    formDateContainer : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        alignContent : 'center',
        margin: 15
    } ,
    formInputContainer :{
       borderBottomWidth : 2,
       borderBottomColor : '#86939e',
       marginLeft : 14,
       marginRight : 14,
       marginBottom : 15      
    },
    calendarBtn :{
       minHeight : 36,
       minWidth : 50,
       color :'#007A7A',
       marginLeft : 5
    },
    formTitle : {
        color : "#86939e",
        fontWeight : 'bold',
        fontSize : 16,
        fontFamily : "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    },
    formInputDate : {
        borderWidth : 2,
        borderRadius : 5,
        borderColor : '#007A7A',
        width : '83%',
        minHeight : 36
    }
  });