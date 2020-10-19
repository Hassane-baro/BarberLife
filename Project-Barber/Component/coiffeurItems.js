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

    gotToCoiffeur = (user) => {
        this.props.navigation.navigate("Profil", {user : user});
    };

    render()
    {
        //console.log("COIFFEURITEMS: "+JSON.stringify(this.props))


        const user = this.props.coiffeur

        return(
           
                    <View style={styles.main_container}>
                        <Image
                            style={styles.image}
                            source= {{ uri: 'https://img.icons8.com/color/1600/avatar.png' } }
                            //source= {{ uri: user.img } }
                        />
                        <View style={styles.content_container}>

                                <View style={styles.header_container} >
                                    <Text style={styles.names}>{user.nom +" "+ user.prenom}</Text>
                                    <Text style={styles.note}>Note</Text>
                                </View>
                                <View style={styles.description}>
                                    <Text style={styles.description_text} numberOfLines={4}>Je suis un très bon coiffeur je vous promet de ne pas vous rater pitié prenez moi ! Néanmoins j'ai raté deux a trois coupe mais je vous jure que ça ma formé. Donc je pourrais au moins vous réussir vous de toute façon faut qu'on essaye pour voir non ? </Text>
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
        //height:hp("20%"),
        height:190,
        flexDirection:'row',
        //backgroundColor:'blue',

    },
    image:{
        //width:wp("30%"),
        //height:hp("18%"),
        width:120,
        height:180,
        margin:5,
        //backgroundColor:'gray'
    },
    content_container:{
        flex:1,
        margin:5,
        //backgroundColor:'green'
    },
    header_container:{
        flex:3,
        flexDirection:'row',
        //backgroundColor:'red'

    },
    names:{
        fontWeight:'bold',
        fontSize:16,
        flex:1,
        flexWrap:'wrap',
        //paddingRight:wp("0%")
        paddingRight:5
    },
    note:{
        fontWeight:'bold',
        fontSize:15,
        color:'#666666',
        //textAlign:'right'

    },
    description:{
        flex:7,
        //backgroundColor:'yellow'
    },
    description_text:{
        fontStyle:'italic',
        color:'#666666'
    },
    date:{
        flex:1,
        //backgroundColor:'orange'
    },
    date_text:{
        textAlign:'right',
        fontSize:14
    }



})
