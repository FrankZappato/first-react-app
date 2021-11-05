import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyAppStackNavigator from './MyAppStackNavigator';

export default function MainNavigation() {
    return(
        <NavigationContainer>
            <MyAppStackNavigator/>
        </NavigationContainer> 
    )
}