import * as React from 'react';
import Home from "../Screens/page_home";
import Boutique from "../Screens/page_boutique";
import Connexion from "../Screens/page_connexion"
import Profil from "../Screens/page_profil";
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'

  const HomeStackBis = createStackNavigator({
    Connexion:{
        screen:Connexion
    },
    Home:{
        screen: Home,
        navigationOptions:{
            title:'retour'
        }
    },
    Profil:{
        screen: Profil
    }
});

export default createAppContainer(HomeStackBis)
