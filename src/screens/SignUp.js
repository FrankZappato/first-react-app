import React, { useState } from 'react'
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Button, Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import DatePicker from '../components/DatePicker'
import Logo from '../components/Logo'
import CommonStyles from './styles/CommonStyle'
import styles from './styles/signUpStyle'
import Spinner from 'react-native-loading-spinner-overlay'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function SignUp({...props}) {
  console.log("PROPS DESDE SIGNUP",props)
  const[name, setName] = useState('')
  const[lastName, setLastname] = useState('')
  const[email, setMail] = useState('')
  const[dni, setDni] = useState('')

  const[dateSelected, setDateSelected] = useState('DD / MM / AAAA')
  const[showDate, setShowDate] = useState(false)
  
   const [loading, setLoading] = useState(false)//loading para el spinner

  const emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  const dniRegex = new RegExp(/^\d{8}(?:[-\s]\d{4})?$/);    

  const handleInput = (val,key)=>{
    if(key === 'name'){
      setName(val)
    }
    if(key === 'apellido'){
      setLastname(val)
    }
    if(key === 'email'){
      setMail(val)
    }       
    if(key === 'dni'){
      setDni(val)
    }
  }

  function validateData(){
      let validForm = true;
    if(name.length < 4 ) {alert('Nombre es un campo necesario'); validForm=false}
    if(lastName.length < 4) {alert('Apellido es un campo necesario'); validForm=false}
    if(email.length < 4 ) {alert('Email es un campo necesario'); validForm=false}
    if(!emailRegex.test(email)) {alert('Email invalido'); validForm=false}
    if(dni.length < 4) {alert('DNI es un campo necesario'); validForm=false}
    if(!dniRegex.test(dni)) {alert('DNI es invalido'); validForm=false}
    if(validForm){startLoading()}
  }  
   /**
    * timeOut de 3 secs para navegar una ves validado que no haya errores en el form.
    */
    const startLoading = () => {
        setLoading(true);
        setTimeout(() => {
            props.navigation.navigate('Profile', { data: {name,lastName,email,dateSelected,dni} 
            })
            setLoading(false);
        }, 3000);
    };
    
  return (
    <ScrollView style={[ styles.formContainer ]}>
      <View style={styles.headerContainer}>
          <Logo/>
          <Text style={styles.title}>Sign up!</Text>           
      </View>

      <Input
        label='Nombre'
        placeholder="Nombre"
        style={styles.formInput}
        onChangeText={(val)=>handleInput(val, 'name')}
      />
      <Input
        label="Apellido"
        placeholder="Apellido"
        style={styles.formInput}
        onChangeText={(val)=>handleInput(val, 'apellido')}
      />
      <Input
        label="Email"
        placeholder="mail@mail.com"
        style={styles.formInput}
        onChangeText={(val)=>handleInput(val, 'email')}
      />

      {showDate ? 
        <DatePicker
          setDateSelected={setDateSelected}         
          setShowDate={setShowDate}
        />
        :null }

        <View style={styles.formInputContainer}>
          <Text style={styles.formTitle}>Fecha de Nacimiento</Text>
          <TouchableOpacity style={styles.formDateContainer} onPress={()=>setShowDate(true)}> 
              <Text
                style={styles.formInputDate}
              >{dateSelected}</Text>

              <Text style={styles.calendarBtn}>
                <Icon
                  name="calendar"
                  size={22}
                  color="#007A7A"
                />
              </Text>
            </TouchableOpacity>
          </View>          

          <Input
                label ="DNI"
                placeholder="  DNI"
                style={styles.formInput}
                onChangeText={(val)=>handleInput(val, 'dni')}
                keyboardAppearance={'dark'}
                keyboardType={'numeric'}
            />          
        <Button title="Registro" onPress={()=>validateData()}/>

        <SafeAreaView styles={{flex: 1}}>
            <View style={styles.container}>
                <Spinner                
                visible={loading}                
                textContent={'Loading...'}                
                textStyle={{color :'#FFF'}}
                />                
            </View>
        </SafeAreaView>

        <View style={CommonStyles.br}/>

    </ScrollView>    
  )
}
