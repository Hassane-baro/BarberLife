import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../Screens/page_home";

const Tab = createBottomTabNavigator();

export const HomeStackScreen = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Commande" component={Home} />
            <Tab.Screen name="Boutique" component={Home} />
            <Tab.Screen name="Profil" component={SettingsStackScreen} />
            {/*1 === 1  && <Tab.Screen name="Test" component={Home} />*/}
        </Tab.Navigator>
    );
};

const SettingsStack = createStackNavigator();

export const SettingsStackScreen = () => {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name="Settings" component={Home} />
            <SettingsStack.Screen name="Details" component={Home} />
        </SettingsStack.Navigator>
    );
};
