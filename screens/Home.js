import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import Logo from '../components/Logo';
import ImageCarousel from '../components/ImageCarousel';

export default function Home({navigation}) {  
    return (
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <Logo/>
          <Text style={styles.title}>Bienvenido a neTThis!</Text>            
        </View>
        <ImageCarousel/>                         
        <StatusBar style="auto" />  
      </ScrollView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',     
    },    
    header : {
        display:'flex',
        marginTop : 15,
        alignContent:'center',
        justifyContent: 'center'
    },
    headerContainer : {
      justifyContent : 'center',      
      alignItems : 'center'
    },
    title : {
      fontWeight : 'bold',
      fontSize : 25,
      marginBottom : 10
    }
  });
