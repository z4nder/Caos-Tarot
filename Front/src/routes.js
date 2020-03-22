import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, {Component} from 'react';
import { Ionicons } from '@expo/vector-icons';

import OneCard from './pages/Readings/OneCard';
const Tab = createBottomTabNavigator()


export default function Routes() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;        
                        if (route.name === 'Uma Carta') {
                        iconName = focused
                            ? 'ios-eye'
                            : 'ios-eye-outline';
                        }         
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'grey',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name="Uma Carta" component={OneCard} />
            </Tab.Navigator>
        </NavigationContainer>
     );
}