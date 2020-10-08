import React from "react";
import {connect} from "react-redux";
import {StyleSheet, Text, View} from "react-native";

class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Home de {this.props.currentUser.prenom}</Text>
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
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
