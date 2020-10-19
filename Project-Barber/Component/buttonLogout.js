import React from "react";
import {AuthContext} from "../context";
import {StyleSheet, View} from "react-native";
import {Button, Input} from "react-native-elements";

export function Deco() {

    const { signOut } = React.useContext(AuthContext);

    return (
        <View>
                <Button
                    buttonStyle={{bottom: 0, backgroundColor: "red"}}
                    onPress={() => signOut()}
                    title="deconexion"
                    type='solid'
                />
        </View>
    );
}

const styles = StyleSheet.create(
    {
        center:
            {
                textAlign: 'center'
            },
        link:
            {
                color: 'blue',
                fontWeight: 'bold'
            },
        space:
            {
                marginTop: 10,
                marginBottom: 10
            },
        container:
            {
                flex: 1,
                height: '100%',
                //backgroundColor: 'gray'
            },
        text:
            {
                //backgroundColor: 'black',
                opacity: 1,
                color: "white",
                fontWeight: 'bold'
            },
        image:
            {
                flex: 1,
                resizeMode: "cover",
                justifyContent: "center"
            }
    });
