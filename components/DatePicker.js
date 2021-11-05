import DateTimePicker from '@react-native-community/datetimepicker'
import { View } from 'react-native'
import React, { useState } from 'react'
import { useEffect } from 'react';

export default function DatePicker({changeEdad}){
    const [date, setDate] = useState(new Date());
    const onChangeDate = (event,selectedDate) => {  
        const currentDate = selectedDate || date                    
        setDate(currentDate);
        changeEdad(currentDate)                                            
    }; 
    useEffect(() => {

    }, [])      
  return(    
    <DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode={'calendar'}
        is24Hour={true}
        display="default"
        onChange={onChangeDate}
    />
    ) 
} 