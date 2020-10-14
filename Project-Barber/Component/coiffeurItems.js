import React from 'react';

//import des objets utiles
import { View } from 'react-native';
import { ListItem }  from 'react-native-elements';

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
        console.log("COIFFEURITEMS: "+JSON.stringify(this.props))
      
        // props donner par le component search qui contient les films pour alimenter le template filmItem
        const user = this.props.user
       
        return(

                <View >
                
                    <ListItem
                        key={user.id_user}
                        leftAvatar={{ source: { uri: 'https://img.icons8.com/color/1600/avatar.png' } }}
                        title={user.nom_user +" "+ user.prenom_user}
                        bottomDivider
                        onPress={() => this.gotToCoiffeur(user)}
                    />
                   
                </View>
            
        )
    }

}