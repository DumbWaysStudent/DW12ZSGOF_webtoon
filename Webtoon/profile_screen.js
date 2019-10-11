import React from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import { Container, Input, Item, Button, Icon, Right, Header, Left } from 'native-base';



class ProfileScreen extends React.Component {

  render() {

    return (

      <Container>
        <View style={styles.content}>
          <Header style={{backgroundColor:'#f64747'}}>
          <Left><Text style={{color:'white', fontSize:20}}>Profile</Text></Left>
          <Right><Icon style={{color:'white'}} onPress={() => this.props.navigation.navigate('EditProfile')} name='create'/></Right>
          </Header>
          <View style={styles.User}>
            <Icon name='contact' style={{fontSize:100, color:'#f64747'}}></Icon>
            <Text style={styles.YourName}>KHAIRUNNAS</Text>
          </View>
          <View>
            <View style={styles.menu1}>
            <View style={{flex:1, alignItems:'flex-start', justifyContent:'center'}}>
            <Text onPress={() => this.props.navigation.navigate('MyCreation')}  style={styles.Text}>My Webtoon Creation</Text>
            </View>
            <View style={{justifyContent:'center', marginEnd:10}}>
            <Icon onPress={() => this.props.navigation.navigate('MyCreation')} name='arrow-dropright-circle' style={{color:'white'}} />
            </View>
            </View>
            <View style={styles.menu2}>
            <Text onPress={() => this.props.navigation.navigate('Login')} style={styles.Text}>Log Out</Text>
            </View>
          </View>
        </View>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    flex : 1,
  },
  menu1: {
    height: 50,
    backgroundColor: '#f64747',
    borderTopWidth:2,
    borderTopColor:'#f3f1ef',
    justifyContent:'center',
    flexDirection:'row'
  },
  menu2: {
    height: 50,
    backgroundColor: '#f64747',
    borderTopWidth:2,
    borderTopColor:'#f3f1ef',
    justifyContent:'center',

  },
  User: {
    alignItems: 'center',
    margin: 10,
    paddingBottom: 50
  },
  YourName : {
    fontSize: 25,
  },
  Text : {
    color: 'white',
    marginStart: 10,
  }
})


export default ProfileScreen;