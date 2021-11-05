import React from 'react'
import { Button, Text, View } from 'react-native'
import styles from './styles/profileStyle'

const  Profile = ({route , navigation}) => { 
    console.log("ROUTE PROFILE",route)   
    return (
        <View>
            <Button
            title="Go back"
            onPress={()=>{navigation.goBack()}}
            />            
            <View style={styles.profileData}>
                <View style={styles.textContainer}>
                    <Text style={styles.profileText}>Nombre :</Text> 
                    <Text> {route.params.data.name}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.profileText}>Apellido :</Text> 
                    <Text>{route.params.data.lastName}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.profileText}>Email : </Text> 
                    <Text> {route.params.data.email}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.profileText}>Edad : </Text> 
                    <Text> {route.params.data.dateSelected}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.profileText}>DNI :</Text> 
                    <Text>{route.params.data.dni}</Text>    
                </View>            
            </View>
        </View>
    )
}
export default Profile