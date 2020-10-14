import React from "react";
import {connect} from "react-redux";
import {AsyncStorage, StyleSheet, Text, View} from "react-native";
import {getCurrentUser, getNearToMeBarber} from "../Actions";
import Icon from "react-native-vector-icons/FontAwesome";
import {Button} from "react-native-elements";

class Home extends React.Component {
    componentDidMount() {
        if(this.props.currentUser == null || this.props.currentUser == undefined) {
            this.props.getCurrentUser(null, null );
        }
    }

    getList = () => {
        this.props.getNearToMeBarber(this.props.currentUser);
    };

    render() {
        return (
            <View style={styles.container}>
                { this.props.currentUser && this.props.currentUser.profil == "CLIENT" &&
                <View>
                    <Text>Liste de coiffeur </Text>
                    <Button
                        buttonStyle={{bottom: 0}}
                        onPress={() => this.getList()}
                        title="refresh"
                        type='solid'
                    />
                </View> }
                { this.props.listCoiffeur &&
                <View><Text>MA liste</Text></View> }
                <Text>Home de {this.props.currentUser && this.props.currentUser.prenom}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const mapStateToProps = state => {
    return {
        currentUser : state.utilisateur.currentUser,
        listCoiffeur : state.utilisateur.listCoiffeur
    }
};

const mapDispatchToProps = {
    getCurrentUser,
    getNearToMeBarber
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
