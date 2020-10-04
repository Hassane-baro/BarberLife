import 'react-native-gesture-handler';
import React from 'react';
import store from "./store"
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import Connexion from "./Screens/page_connexion"
import {Provider} from "react-redux";

export default function App() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <Connexion/>
            </View>
        </Provider>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
