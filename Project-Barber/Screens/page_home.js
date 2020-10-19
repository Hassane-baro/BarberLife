import React from "react";
import {connect} from "react-redux";
import {AsyncStorage, StyleSheet, Text, View, FlatList} from "react-native";
import {getCurrentUser, getNearToMeBarber} from "../Actions";
import {Button} from "react-native-elements";
import CoiffeurItems from '../Component/coiffeurItems'
import {AuthContext} from "../context";

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state =
        {
           coiffeurs:""
        }
    }

    componentDidMount() {
        if(this.props.currentUser == null || this.props.currentUser == undefined) {
            this.props.getCurrentUser(null, null );
        }
    }

    getList = () => {
        this.props.getNearToMeBarber(this.props.currentUser);
    };
    displayCoiffeur()
    {
            //this.setState.coiffeurs = this.props.listCoiffeur
            return(

                /*<CoiffeurList
                    coiffeurs={this.state.coiffeurs}
                    navigation = {this.props.navigation}
                />*/
                <FlatList
                    data={this.props.listCoiffeur}
                    keyExtractor= {(item) => item.id.toString()}
                    renderItem= {({item}) => (
                    <CoiffeurItems
                        coiffeur = {item}
                        navigation = {this.props.navigation}
                    />
                    )}
                />

            )

    }

    render() {
        return (
            <View style={styles.container}>
                { this.props.currentUser && this.props.currentUser.profil == "CLIENT" &&
                <View>

                    <Button
                        buttonStyle={{bottom: 0}}
                        onPress={() => this.getList()}
                        title="Rechercher"
                        type='solid'

                    />
                    { this.props.listCoiffeur &&
                    this.displayCoiffeur()
                    }

                </View> }


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#fff',
        //alignItems: 'center',
        //justifyContent: 'center',
        //marginTop:20
    },
    textinput:{
        marginLeft:5,
        marginRight:5,
        height:50,
        borderWidth:1,
        paddingLeft:5
    }
});

const mapStateToProps = state => {
    return {
        currentUser : state.utilisateur.currentUser,
        listCoiffeur : state.barber.listCoiffeur
    }
};

const mapDispatchToProps = {
    getCurrentUser,
    getNearToMeBarber
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
