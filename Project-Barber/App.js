import 'react-native-gesture-handler';
import React from "react";
import store from "./store"
import {Provider} from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AuthContext } from "./context";

import {Connexion} from "./Screens/page_connexion";
import Boutique from "./Screens/page_boutique";
import Home from "./Screens/page_home";
import MonProfile from "./Screens/page_monprofil";
import Profil from "./Screens/page_profil";
import Splash from "./Screens/splash";
import axios from "axios";
import {AsyncStorage} from "react-native";
import {userConstants} from "./Constants/user.constants";
import {setUser} from "./Actions";


const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen
            name="SignIn"
            component={Connexion}
            options={{ title: "Sign In" }}
        />
        <AuthStack.Screen
            name="CreateAccount"
            component={Connexion}
            options={{ title: "Create Account" }}
        />
    </AuthStack.Navigator>
);

const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const BoutiqueStack = createStackNavigator();

const HomeStackScreen = () => (
    <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={Home} />
        <HomeStack.Screen
            name="Profil"
            component={Profil}
            options={({ route }) => ({
                title: route.params.name
            })}
        />
    </HomeStack.Navigator>
);

const BoutiqueStackScreen = () => (
    <BoutiqueStack.Navigator>
        <BoutiqueStack.Screen name="Boutique" component={Boutique} />
        <BoutiqueStack.Screen name="Boutique2" component={Boutique} />
    </BoutiqueStack.Navigator>
);

const MonProfileStack = createStackNavigator();
const MonProfileStackScreen = () => (
    <MonProfileStack.Navigator>
        <MonProfileStack.Screen name="Mon Profile" component={MonProfile} />
    </MonProfileStack.Navigator>
);

const TabsScreen = () => (
    <Tabs.Navigator>
        <Tabs.Screen name="Commande" component={HomeStackScreen} />
        <Tabs.Screen name="Boutique" component={BoutiqueStackScreen} />
        <Tabs.Screen name="Mon Profil" component={MonProfileStackScreen} />
    </Tabs.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = ({ userToken }) => (
    <RootStack.Navigator headerMode="none">
        {userToken ? (
            <RootStack.Screen
                name="BarberLife"
                component={TabsScreen}
                options={{
                    animationEnabled: false
                }}
            />
        ) : (
            <RootStack.Screen
                name="Connexion"
                component={AuthStackScreen}
                options={{
                    animationEnabled: false
                }}
            />
        )}
    </RootStack.Navigator>
);

export default function App({ navigation }) {
    const [state, dispatch] = React.useReducer(
        (prevState, action) => {
            switch (action.type) {
                case 'RESTORE_TOKEN':
                    return {
                        ...prevState,
                        token: action.token,
                        isLoading: false,
                    };
                case 'SIGN_IN':
                    return {
                        ...prevState,
                        isSignout: false,
                        token: action.token,
                    };
                case 'SIGN_OUT':
                    return {
                        ...prevState,
                        isSignout: true,
                        token: null,
                    };
            }
        },
        {
            isLoading: true,
            isSignout: false,
            token: null,
        }
    );

    React.useEffect(() => {
        // Fetch the token from storage then navigate to our appropriate place

        const bootstrapAsync = async () => {
            let token;

            try {
                token = await AsyncStorage.getItem('user');
            } catch (e) {
                // Restoring token failed
            }

            // After restoring token, we may need to validate it in production apps

            // This will switch to the App screen or Auth screen and this loading
            // screen will be unmounted and thrown away.
            dispatch({ type: 'RESTORE_TOKEN', token: token });
        };

        bootstrapAsync();
    }, []);

    const authContext = React.useMemo(
        () => ({
            signIn: async data => {
                // In a production app, we need to send some data (usually username, password) to server and get a token
                // We will also need to handle errors if sign in failed
                // After getting token, we need to persist the token using `AsyncStorage`
                // In the example, we'll use a dummy token
                const {username, password} = data;
                const config = {
                    headers: {'Content-Type': 'application/json'},
                };
                const bodyParameters = {
                    username,
                    password
                };
                axios.post(
                    "http://localhost:4545/api/v1/authentification",
                    bodyParameters,
                    config
                ).then((res) => {
                    console.log(res.data);
                    let user = res.data;
                    AsyncStorage.setItem('user', JSON.stringify(user));
                    dispatch({ type: 'SIGN_IN', token: user.token });
                }).catch((error) => {
                    console.error(error);
                    dispatch({type:'SIGN_OUT', token:undefined});
                });
            },
            signOut: () => dispatch({ type: 'SIGN_OUT' }),
            signUp: async data => {
                // In a production app, we need to send user data to server and get a token
                // We will also need to handle errors if sign up failed
                // After getting token, we need to persist the token using `AsyncStorage`
                // In the example, we'll use a dummy token

                dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
            },
        }),
        []
    );

    return (

            <AuthContext.Provider value={authContext}>
                <Provider store={store}>
                <NavigationContainer>
                    {state && <RootStackScreen userToken={state.token} />}
                </NavigationContainer>
                </Provider>
            </AuthContext.Provider>

    );
};
