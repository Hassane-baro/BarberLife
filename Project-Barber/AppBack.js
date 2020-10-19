import 'react-native-gesture-handler';
import React from 'react';
import store from "./store"
import {Provider} from "react-redux";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {ActivityIndicator, StatusBar, StyleSheet, Text, View} from 'react-native';
import { HomeStackScreen } from "./Routes/routes"
import HomeStackBis from "./Routes/route2"
import Connexion from "./Screens/page_connexion"
import Home from "./Screens/page_home";

export default function App() {
    const Stack = createStackNavigator();

    return (
      
        
        <Provider store={store}>
            {Platform.OS === 'ios' && (
                <StatusBar barStyle={false ? 'light-content' : 'dark-content'} />
            )}
            <NavigationContainer>

                <Stack.Navigator initialRouteName="Connexion">
                    <Stack.Screen name="Connexion" component={Connexion} />
                    <Stack.Screen name="Home" component={HomeStackBis} />
                </Stack.Navigator>
            </NavigationContainer>

        </Provider>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
