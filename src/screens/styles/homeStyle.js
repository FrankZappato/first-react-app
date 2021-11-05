
 import { StyleSheet } from 'react-native';

 export default StyleSheet.create({
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