import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React, {Component} from 'react';

import { Ionicons } from '@expo/vector-icons';
import { Fonts, Colors } from './Themes'

import NumberOfCards from './pages/Readings/NumberOfCards';
import DrawnCards from './pages/Readings/DrawnCards';
const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

function DrawnSteps() {
    return(
        <Stack.Navigator
        initialRouteName="NumberOfCards"
        headerMode="screen"
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: Colors.darkGrey },
        }}
        >
            <Stack.Screen name="NumberOfCards" component={NumberOfCards}></Stack.Screen>
            <Stack.Screen name="DrawnCards" component={DrawnCards}></Stack.Screen>
        </Stack.Navigator>    
    )
}

export default function Routes() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;        
                        if (route.name === 'Nova Tiragem') {
                        iconName = focused
                            ? 'ios-eye'
                            : 'ios-eye';
                        }         
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'white',
                    inactiveTintColor: 'white',
                    tabStyle: { backgroundColor: Colors.darkGrey },
                }}
            >
                <Tab.Screen name="Nova Tiragem" component={DrawnSteps} />
            </Tab.Navigator>
        </NavigationContainer>
     );
}