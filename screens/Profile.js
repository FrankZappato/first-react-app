import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Profile = ({navigation}) => {
    return (
        <View>
            <Button
            title="Go back"
            onPress={()=>{navigation.goBack()}}
            />
            <Text>Profile!</Text>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({})
