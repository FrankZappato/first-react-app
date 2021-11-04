import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import DatePicker from '../components/DatePicker'
import CommonStyles from './styles/CommonStyle'

export default function SignUp() {
  const[dateSelected, setDateSelected] = useState('DD / mm / AAAA')
  const[showDate, setShowDate] = useState(false)

  return (
    <View>
      <Text>Nuevo Sing up</Text>
      <View style={[CommonStyles.br]}/>
      <TouchableOpacity 
        onPress={()=> setShowDate(true)} 
        style={{backgroundColor:'yellow', margin: 8, padding: 8 }} 
      >
        <Text>{dateSelected}</Text>
        <Text>Calendario</Text>
      </TouchableOpacity>

      {showDate ? 
        <DatePicker
          setDateSelected={setDateSelected}
          dateSelected={dateSelected}
          setShowDate={setShowDate}
        />
        :null }
        
    </View>
  )
}
