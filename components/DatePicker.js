import DateTimePicker from '@react-native-community/datetimepicker'
import { View } from 'react-native'
import React, { useState } from 'react'
import { useEffect } from 'react';

export default function DatePicker({show,changeEdad,fecha}){
    const [date, setDate] = useState(new Date());
    const onChangeDate = (event, selectedDate) => {                      
        setDate(selectedDate);
        changeEdad(selectedDate)
                                         
    };
    useEffect(()=>{
        if(fecha === ''){
            
        }
    },[])    
  return(  
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
  )
} 