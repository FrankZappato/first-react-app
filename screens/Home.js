import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import Logo from '../components/Logo';
//import Carousel from 'react-native-snap-carousel';
import NumberCarousel from '../components/Carousel';
import ImageCarousel from '../components/ImageCarousel';

export default function Home({navigation}) {
    return (
      <ScrollView style={styles.container}>
        <Logo/>
        <Text>Bienvenido a netthis!</Text>            
        <ImageCarousel/>                         
        <StatusBar style="auto" />  
      </ScrollView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      //alignItems: 'center',
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
