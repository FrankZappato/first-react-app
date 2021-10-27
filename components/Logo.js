import  * as React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import logo from '../assets/netthis-logo.png'; 

export default function Logo(){
    return(
        <View style={styles.header}>
            <Image source={logo} style={styles.logo}/>  
        </View>      
    );
}

const styles = StyleSheet.create({    
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
