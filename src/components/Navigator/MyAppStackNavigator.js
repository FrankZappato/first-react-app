import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/Home';
import Screens from '../../utils/ScreenNames';
import { Text } from 'react-native';

const Stack = createNativeStackNavigator();

function HeaderMp({ type, help = false, ...props }) {

  let navigation = props.props.navigation;
  let route = props.props.route;

  return {
    headerLeft: props => <Text>Hola mundo </Text>,
    //HeaderLeft: props => <HeaderLeft navigation={navigation} props={props} />,
    //headerTitle: props => <HeaderLeft navigation={navigation} props={props} />,
    //headerRight: props => <HeaderRigth navigation={navigation} props={props} />
  }
}

export default function OliverStackNavigator({ ...props }) {
  return (
    <Stack.Navigator >
      {/* Oliver Delivery xD  */}
      <Stack.Group>
        {/* <Stack.Screen options={props => HeaderMp({ type: 'chat', props: props })} name={Screens.OLIVER_DELIVERY_HOME} component={Home} /> */}
        <Stack.Screen  options={props => HeaderMp({ type: 'chat', props: props }), { headerShown: false }} name={Screens.MY_APP_HOME} component={Home} />
        {/*<Stack.Screen options={{ headerShown: false }} name={Screens.OLIVER_SEARCHPAGE} component={SearchPage} />*/}

      </Stack.Group>
    </Stack.Navigator>
  )
}