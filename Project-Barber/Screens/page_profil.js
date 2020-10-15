import React from "react";
import {connect} from "react-redux";
import {AsyncStorage, Button, StyleSheet, Text, View} from "react-native";


class Profil extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            u : {}
        }
    }
    componentDidMount() {
        this.setState({ u : this.props.route.params.user} );
    }

    render() {
        return (
            <View style={styles.container}>
                <Button
                    title="Go to back"
                    onPress={() => this.props.navigation.goBack()}
                />
                <Text>Profil pour { this.state.u && this.state.u.prenom }</Text>
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
export default connect(mapStateToProps, mapDispatchToProps)(Profil);
