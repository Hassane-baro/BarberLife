import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from "react-redux";
import {Input,} from 'react-native-elements';
import {StyleSheet, Text, View} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";
import {AsyncStorage} from "react-native";
import {Avatar, Button, Card, Divider, Header} from 'react-native-elements';
import {login, setUser} from "../Actions";

class Connexion extends React.Component {
    componentDidMount() {
        AsyncStorage.getItem("user").then((user) => {
            if (user) {
                this.props.setUser(user);
                this.goToHome();
            }
        });
        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChangePwd = this.handleChangePwd.bind(this);
        this.handleChangeUsr = this.handleChangeUsr.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangePwd(text) {
        this.setState({password: text});
    }
    handleChangeUsr(text) {
        this.setState({username: text});
    }

    handleSubmit() {
        //e.preventDefault();
        this.setState({submitted: true});
        const {username, password} = this.state;
        console.log(username, '   ', password);
        const {login} = this.props;
        if (username && password) {
            login(username, password, this.goToHome, null);
        }
    }

    goToHome = () => {
        this.props.navigation.navigate("Home");
        // this.props.navigation.replace("Home");
    };

    goToInscription = () => {
        console.log("TODO");
        // this.props.navigation.navigate("Inscription");
    };

    render() {
        return (
            <View style={styles.container}>
                <Card
                    title='CONNEXION'
                    image={require('../Images/logo-barberLife.png')}
                    containerStyle={
                        {
                            borderRadius: wp("2%"),
                            opacity: "0.98",
                            height: hp("90%"),
                            width: wp("90%"),
                            marginTop: hp("5%")
                        }
                    }
                >
                    <View>
                        <Input
                            label='Login/ Mail'
                            name="username"
                            labelStyle={{fontWeight: 'bold', fontStyle: 'italic'}}
                            placeholder='Saisissez votre login/ mail'
                            leftIcon=
                                {
                                    <Icon
                                        name='user-circle-o'
                                        size={24}
                                        color='black'
                                    />
                                }
                            onChangeText={(text) => this.handleChangeUsr(text)}
                        />

                        <Input
                            label='Mot de passe'
                            name="password"
                            labelStyle={{fontWeight: 'bold', fontStyle: 'italic'}}
                            placeholder="Saisissez votre mot de passe"
                            secureTextEntry={true}
                            leftIcon=
                                {
                                    <Icon
                                        name='unlock-alt'
                                        size={24}
                                        color='black'
                                    />
                                }
                            onChangeText={(text) => this.handleChangePwd(text)}
                        />
                    </View>

                    <View style={styles.space}>
                        <Text
                            style={styles.center}
                        > Vous ne possédez pas encore de compte ? </Text>
                        <Text
                            accessibilityRole='link'
                            style={[styles.center, styles.link]}
                            onPress={() => this.goToInscription()}
                        > Inscrivez-vous </Text>
                    </View>

                    <View>
                        <Button
                            buttonStyle={{bottom: 0}}
                            icon=
                                {
                                    <Icon
                                        name="beer"
                                        size={15}
                                        color="white"
                                    />
                                }
                            //loading={this.state.loading}
                            onPress={() => this.handleSubmit()}
                            title="Connexion"
                            type='solid'
                        />
                    </View>

                </Card>
            </View>

        )
    }
}


const styles = StyleSheet.create(
    {
        center:
            {
                textAlign: 'center'
            },
        link:
            {
                color: 'blue',
                fontWeight: 'bold'
            },
        space:
            {
                marginTop: 10,
                marginBottom: 10
            },
        container:
            {
                flex: 1,
                height: '100%',
                //backgroundColor: 'gray'
            },
        text:
            {
                //backgroundColor: 'black',
                opacity: 1,
                color: "white",
                fontWeight: 'bold'
            },
        image:
            {
                flex: 1,
                resizeMode: "cover",
                justifyContent: "center"
            }
    });

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = {
    login,
    setUser
};
export default connect(mapStateToProps, mapDispatchToProps)(Connexion);
