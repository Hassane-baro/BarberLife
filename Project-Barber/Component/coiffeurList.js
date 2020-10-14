/*import React from 'react';

//import des objets utiles
import { View,Text,StyleSheet,FlatList } from 'react-native';
import CoiffeurItem from './coiffeurItems';

//Retourne le coiffeur courant de page_commande pour l'afficher dans une FlatiList
export default class CoiffeurList extends React.Component
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
      
        // props donner par le component search qui contient les films pour alimenter le template filmItem
        const user = this.props.coiffeurs
        //console.log(user);
        return(

                <View style={styles.main_container}>
                
                    <FlatList
                        style={styles.list}
                        data={user}
                        keyExtractor={(item)=>item.id.toString()}
                        renderItem={({item})=>(
                            <CoiffeurItem
                                coiffeur={item}
                            />
                            
                        )}
                        onEndReachedThreshold={0.5}
                    />
                   
                </View>
            
        )
    }

    

}
const styles = StyleSheet.create({
  list:{
      flex:1
  }
})

*/