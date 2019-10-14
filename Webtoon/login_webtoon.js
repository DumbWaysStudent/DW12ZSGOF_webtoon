import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Input, Item, Button, Icon } from 'native-base';



class LoginScreen extends React.Component {

  constructor()
  {
    super();
 
    this.state = { 
      hidePassword: true,
      emailValue : '',
      passwordValue : ''
    }
  }
 
  buttonEnabled= () =>
  {

  }

  managePasswordVisibility = () =>
  {
    this.setState({ hidePassword: !this.state.hidePassword });
  }

  render() {
    console.disableYellowBox=true;

    return (

      <Container style={{backgroundColor:''}}>
        <View style={styles.content}>
          <View style={styles.title}>
            <Text style={styles.login}>LOGIN</Text>
            <Text>Login with your account WEBTOON</Text>
          </View>
          <View>
            <Text>Email</Text>
            <Item regular style={styles.input}>
              <Input autoCapitalize='none' keyboardType='email-address' onChangeText={(text)=>{this.setState({emailValue:text})}} value={this.state.emailValue}/>
            </Item>
            <Text>Password</Text>
            <Item rounded style={styles.input}>
              <Input secureTextEntry = { this.state.hidePassword } onChangeText={(text)=>{this.setState({passwordValue:text})}} value={this.state.passwordValue}/>
              <TouchableOpacity activeOpacity = { 0.8 }  onPress = { this.managePasswordVisibility }>
              <Icon name = { ( this.state.hidePassword ) ? 'eye' : 'eye-off' } />
              </TouchableOpacity>
            </Item>
            <Button disabled={(this.state.emailValue && this.state.passwordValue)=='' ? true:false}
             style={ ( this.state.emailValue && this.state.passwordValue )=='' ? styles.buttonDisabled : styles.button }
             onPress={() => this.props.navigation.navigate('Home')}>
            <Text style={{color:'white'}} > Login </Text>
            </Button>
          </View>
        </View>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    flex : 1,
    justifyContent: 'center',
    margin:40
  },
  input: {
    height: 50,
    marginBottom:15,
    borderRadius:10
  },
  button: {
    height: 50,
    justifyContent: "center",
    borderRadius:10,
    backgroundColor:'#f64747'   
  },
  buttonDisabled: {
    height: 50,
    justifyContent: "center",
    borderRadius:10,
    backgroundColor:'grey'   
  },
  title: {
    alignItems: 'center',
    margin: 10,
    paddingTop: 10,
    paddingBottom: 30
  },
  login : {
    fontSize: 40,
  }
})


export default LoginScreen;