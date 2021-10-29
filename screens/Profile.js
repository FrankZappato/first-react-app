import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Profile = ({route , navigation}) => {
    console.log("AAAAAA",route)
    //const data = props.route.params.nombre;
    return (
        <View>
            <Button
            title="Go back"
            onPress={()=>{navigation.goBack()}}
            />
            <Text>Nombre : {route.params.data.state.nombre}</Text>
            <Text>Apellido : {route.params.data.state.apellido}</Text>
            <Text>Email : {route.params.data.state.email}</Text>
            <Text>Password : {route.params.data.state.edad}</Text>
            <Text>DNI : {route.params.data.state.dni}</Text>
            <Text>Profile!</Text>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({})
