import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, {Component} from 'react';

import OneCard from './pages/Readings/OneCard';
const Tab = createBottomTabNavigator()


export default function Routes() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Uma Carta" component={OneCard} />
            </Tab.Navigator>
        </NavigationContainer>
     );
}