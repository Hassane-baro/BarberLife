import React from "react";
import {connect} from "react-redux";
import {AsyncStorage, StyleSheet, Text, View} from "react-native";
import {getCurrentUser} from "../Actions";

class Home extends React.Component {
    componentDidMount() {
        if(this.props.currentUser == null || this.props.currentUser == undefined) {
            this.props.getCurrentUser(null, null );
        }
    }
    render() {
        return (
            <View style={styles.container}>
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
        currentUser : state.utilisateur.currentUser
    }
};

const mapDispatchToProps = {
    getCurrentUser
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
