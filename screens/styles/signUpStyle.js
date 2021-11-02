
import { StyleSheet } from 'react-native';

export default  StyleSheet.create({     
    formContainer : {
        margin : 20,
        marginTop : 80,       
        alignContent : 'center'
    },
    formInput : {
        borderWidth : 2,
        borderRadius : 5,
        borderColor : '#007A7A',
        margin : 15,
        
    },
    headerContainer : {
        justifyContent : 'center',      
        alignItems : 'center'
    },
    title : {
        fontWeight : 'bold',
        fontSize : 20
    } ,
    container: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        paddingTop: 30,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    spinnerTextStyle: {
        color: '#FFF',
    }, 
    formDateContainer : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        alignContent : 'center',
        margin: 15
    } ,
    formInputContainer :{
        borderBottomWidth : 1,
        borderBottomColor : '#86939e',
        marginLeft : 14,
        marginRight : 14,
        marginBottom : 15      
    },
    calendarBtn :{
        minHeight : 36,
        minWidth : 50,
        color :'#007A7A',
        marginLeft : 5,
        borderWidth  : 2,
        borderColor : '#007A7A'
    },
    formTitle : {
        color : "#86939e",
        fontWeight : 'bold',
        fontSize : 16        
    },
    formInputDate : {
        borderWidth : 2,
        borderRadius : 5,
        borderColor : '#007A7A',
        width : '83%',
        minHeight : 36
    }
});
