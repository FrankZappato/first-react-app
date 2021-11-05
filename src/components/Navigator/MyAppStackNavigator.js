import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../../screens/Home';
import SignUp from '../../screens/SignUp';
import Profile from '../../screens/Profile';
import Screens from '../../utils/ScreenNames';
import { Text } from 'react-native';

const Stack = createNativeStackNavigator();
const Drawer =createDrawerNavigator();

function HeaderMp({ type, help = false, ...props }) {

  let navigation = props.props.navigation;
  let route = props.props.route;

  return {
    //headerLeft: props => <Text>Hola mundo </Text>,
    //HeaderLeft: props => <HeaderLeft navigation={navigation} props={props} />,
    //headerTitle: props => <HeaderLeft navigation={navigation} props={props} />,
    //headerRight: props => <HeaderRigth navigation={navigation} props={props} />
  }
}

export default function MyAppStackNavigator({ ...props }) {
  return (    
     <Stack.Navigator>      
        <Stack.Screen name={Screens.MY_APP_DRAWER} options={{headerShown:false}}  component={DrawerNavigator} /> 
        <Stack.Screen options={props => HeaderMp({ type: 'chat', props: props })}
          name={Screens.MY_APP_PROFILE} component={Profile} 
         />    
    </Stack.Navigator>
      
  )
  function DrawerNavigator(){
    return (
      <Drawer.Navigator initialRouteName={Screens.MY_APP_HOME}>
          <Drawer.Screen name={Screens.MY_APP_HOME} component={Home} />        
          <Drawer.Screen name={Screens.MY_APP_SIGN_UP} component={SignUp} options={props => HeaderMp({ type: 'chat', props: props })}/>        
      </Drawer.Navigator>
    )
  }
}