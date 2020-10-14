import React from 'react';

//import des objets utiles
import { View,Text,StyleSheet,Image } from 'react-native';
import { ListItem } from 'react-native-elements';
import { max } from 'react-native-reanimated';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";


//Retourne le coiffeur courant de page_commande pour l'afficher dans une FlatiList
export default class CoiffeurItem extends React.Component
{

    //Constructeur
    constructor(props)
    {
        super(props)
    }

    gotToCoiffeur(user)
    {
        this.props.navigation.navigate("Coiffeur", {user});
    }

    render()
    {
        //console.log("COIFFEURITEMS: "+JSON.stringify(this.props))


        const user = this.props.coiffeur

        return(

            <View style={styles.main_container} >


                        <Image
                            style={styles.image}
                            //source= {{ uri: 'https://img.icons8.com/color/1600/avatar.png' } }
                            source= {{ uri: user.img } }
                        />
                        <View style={styles.content_container}>

                                <View style={styles.header_container} >
                                    <Text style={styles.names}>{user.nom +" "+ user.prenom}</Text>
                                    <Text style={styles.note}>Note</Text>
                                </View>
                                <View style={styles.description}>
                                    <Text style={styles.description_text} numberOfLines={6}>Je suis un très bon coiffeur je vous promet de ne pas vous rater pitié prenez moi !</Text>
                                </View>
                                <View style={styles.date}>
                                    <Text style={styles.date_text}>Coupe depuis 2016</Text>
                                </View>



                        </View>

            </View>

        )
    }



}
const styles = StyleSheet.create({

    main_container:{
        height:hp("20%"),
        flexDirection:'row',
        backgroundColor:'blue',

    },
    image:{
        width:wp("30%"),
        height:hp("18%"),
        margin:5,
        backgroundColor:'gray'
    },
    content_container:{
        flex:1,
        margin:5,
        backgroundColor:'green'
    },
    header_container:{
        flex:3,
        flexDirection:'row',
        backgroundColor:'red'

    },
    names:{
        fontWeight:'bold',
        fontSize:18,
        flex:1,
        flexWrap:'wrap',
        paddingRight:wp("0%")
    },
    note:{
        fontWeight:'bold',
        fontSize:21,
        color:'#666666',
        textAlign:'right'

    },
    description:{
        flex:7,
        backgroundColor:'yellow'
    },
    description_text:{
        fontStyle:'italic',
        color:'#666666'
    },
    date:{
        flex:5,
        backgroundColor:'orange'
    },
    date_text:{
        textAlign:'right',
        fontSize:14
    }



})
