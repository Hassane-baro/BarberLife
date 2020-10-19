import React from "react";
import {connect} from "react-redux";
import {AsyncStorage, Button, StyleSheet, Text, View} from "react-native";
import {logout} from "../Actions";
import {AuthContext} from "../context";
import {Deco} from "../Component/buttonLogout";



class MonProfil extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            u: {},
        }
    }
    componentDidMount() {
        this.setState({ u : this.props.currentUser} );
    }

    render() {
        return (
            <View style={styles.container}>
                <Deco />
                <Text>"Mon Profil" pour { this.state.u && this.state.u.prenom }</Text>
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
        currentUser : state.utilisateur.currentUser
    }
};

const mapDispatchToProps = {
    logout
};
export default connect(mapStateToProps, mapDispatchToProps)(MonProfil);
