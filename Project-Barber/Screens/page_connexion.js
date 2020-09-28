import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,} from 'react-native-elements';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, Card, Divider, Header } from 'react-native-elements';

export default class Connexion extends React.Component{
    render(){
        return(
            
            <View style={styles.container}>
            <Card
            title='CONNEXION'
            image={require('../Images/logo-barberLife.png')}
            containerStyle={{ borderRadius: '25px', opacity: 0.98, height: '95%' }}
          >
            <View>
            <Input
              label='Login/ Mail'
              labelStyle={{ fontWeight: 'bold', fontStyle: 'italic' }}
              placeholder='Saisissez votre login/ mail'
              leftIcon=
              {
                <Icon
                  name='user-circle-o'
                  size={24}
                  color='black'
                />
              }
              errorMessage='ENTER A VALID LOGIN'
              errorStyle={{ color: 'red', fontWeight: 'bold' }}
              onChangeText={(text) => this.getInputId(text)}
            />

            <Input
              label='Mot de passe'
              labelStyle={{ fontWeight: 'bold', fontStyle: 'italic' }}
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
              errorMessage='ENTER A VALID PASSWORD'
              errorStyle={{ color: 'red', fontWeight: 'bold' }}
              onChangeText={(text) => this.getInputMdp(text)}
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
              onPress={() => this.getConnexion()}
              title=" Connexion"
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