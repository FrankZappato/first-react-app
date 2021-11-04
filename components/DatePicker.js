import DateTimePicker from '@react-native-community/datetimepicker'
import { View } from 'react-native'
import React, { useState, useEffect } from 'react'
import moment from 'moment';

export default function DatePicker({ setDateSelected, setShowDate }){
    const [dateDefault, setDateDefault] = useState(new Date());

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || dateDefault;
        setDateDefault(currentDate);
        setDateSelected( moment(currentDate).format('DD/MM/YYYY') )
        setShowDate(false)
    };

    useEffect(() => {

    }, [])

    return(  
        <DateTimePicker
            testID="dateTimePicker"
            value={dateDefault}
            mode={'date'}
            is24Hour={true}
            display="default"
            onChange={onChange}
        />
    )
} 