import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
      backgroundColor: '#141518',
      paddingVertical: 20,   
    },
    carousel: {
      backgroundColor: '#141518',
      aspectRatio: 1.5,
      flexGrow: 0,
      marginBottom: 20,    
    },
    item: {
      borderWidth: 2,
      backgroundColor: 'white',
      flex: 1,
      borderRadius: 5,
      borderColor: 'white',
      elevation: 3,
    },
    imageBackground: {
      flex: 2,
      backgroundColor: '#EBEBEB',
      borderWidth: 5,
      borderColor: 'white',
    },
    rightTextContainer: {
      marginLeft: 'auto',
      marginRight: -2,
      backgroundColor: 'rgba(49, 49, 51,0.5)',
      padding: 3,
      marginTop: 3,
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
    },
    rightText: {color: 'white'},
    lowerContainer: {
      flex: 1,
      margin: 10,
    },
    titleText: {
      fontWeight: 'bold',
      fontSize: 18,
    },
    contentText: {
      marginTop: 10,
      fontSize: 12,
    },
  });