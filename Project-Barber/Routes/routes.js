import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../Screens/page_home";
import Boutique from "../Screens/page_boutique";
import Profil from "../Screens/page_profil";

const Tab = createBottomTabNavigator();

export const HomeStackScreen = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={ClientHomeStackScreen} />
            <Tab.Screen name="Boutique" component={Boutique} />
            <Tab.Screen name="Mon Profil" component={SettingsStackScreen} />
            {/*1 === 1  && <Tab.Screen name="Test" component={Home} />*/}
        </Tab.Navigator>
    );
};

const SettingsStack = createStackNavigator();

export const SettingsStackScreen = () => {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name="Mon Profil" component={Home} />
            <SettingsStack.Screen name="Details" component={Home} />
        </SettingsStack.Navigator>
    );
};

const ClientHomeStack = createStackNavigator();

export const ClientHomeStackScreen = () => {
    return (
        <ClientHomeStack.Navigator>
            <ClientHomeStack.Screen name="Recherche" component={Home} />
            <ClientHomeStack.Screen name="Profil" component={Profil} />
        </ClientHomeStack.Navigator>
    );
};
