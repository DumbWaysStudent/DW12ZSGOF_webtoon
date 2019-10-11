import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Container, Input, Item, Button, Icon, Right } from 'native-base';



class ProfileScreen extends React.Component {

  render() {

    return (

      <Container style={{backgroundColor:''}}>
        <View style={styles.content}>
          <View style={styles.User}>
            <Icon name='contact' style={{fontSize:100, color:'#f64747'}}></Icon>
          </View>
          <View style={{alignItems:'center'}}>
          <Item rounded style={styles.input}>
            <Input placeholder='YOUR NAME'/>
            </Item>
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
    justifyContent:'center'
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
  },
  input : {
    borderRadius:10,
    borderColor:'black',
    width:270
  }
})


export default ProfileScreen;