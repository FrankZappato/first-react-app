import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import logo from '../assets/netthis-logo.png'; 

export default function Home({navigation}) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Image source={logo} style={styles.logo}/>
            <Text>Bienvenido a netthis!</Text>
        </View>
        <StatusBar style="auto" />        
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      //justifyContent: 'center',
    },
    logo :{
      width:300,
      height:120
    },
    header : {
        display:'flex',
        marginTop : 15,
        alignContent:'center',
        justifyContent: 'center'
    }
  });
