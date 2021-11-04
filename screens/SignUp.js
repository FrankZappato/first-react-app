import React, { useState } from 'react'
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Button, Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import DatePicker from '../components/DatePicker'
import Logo from '../components/Logo'
import CommonStyles from './styles/CommonStyle'
import styles from './styles/signUpStyle'

export default function SignUp() {
  const[name, setName] = useState('')
  const[lastname, setLastname] = useState('')
  const[mail, setMail] = useState('')
  const[dni, setDni] = useState('')

  const[dateSelected, setDateSelected] = useState('DD / mm / AAAA')
  const[showDate, setShowDate] = useState(false)

  const validate = (val,key)=>{
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

  function validateDate(){
    if(name.length < 8 ) {alert('pone bien tu nombre')}
    if(mail.length < 8 ) {alert('pone bien tu mail')}

    
  }

  return (
    <ScrollView style={[ styles.formContainer ]}>
      <View style={styles.headerContainer}>
          <Logo/>
          <Text style={styles.title}>Sign up!</Text> 
          <View>
            <Text style={styles.title}>{name}</Text> 
            <Text style={styles.title}>{lastname}</Text> 
            <Text style={styles.title}>{dni}</Text> 
            <Text style={styles.title}>{mail}</Text> 
          </View>
      </View>

      <Input
        label='Nombre'
        placeholder="Nombre"
        style={styles.formInput}
        onChangeText={(val)=>validate(val, 'name')}
      />
      <Input
        label="Apellido"
        placeholder="Nombre"
        style={styles.formInput}
        onChangeText={(val)=>validate(val, 'apellido')}
      />
      <Input
        label="Email"
        placeholder="Nombre"
        style={styles.formInput}
        onChangeText={(val)=>validate(val, 'mail@mail.com')}
      />

      {showDate ? 
        <DatePicker
          setDateSelected={setDateSelected}
          dateSelected={dateSelected}
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
                onChangeText={(val)=>validate(val, 'dni')}
                keyboardAppearance={'number'}
            />          
        <Button title="Registro" onPress={()=>validateDate()}/>

        <View style={CommonStyles.br}/>

    </ScrollView>
  )
}
