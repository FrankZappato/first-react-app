import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import Logo from '../components/Logo';
import ImageCarousel from '../components/ImageCarousel';
import styles  from './styles/homeStyle';

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


