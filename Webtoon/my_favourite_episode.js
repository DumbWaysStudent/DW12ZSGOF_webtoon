import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Image} from 'react-native';
import { Button, Label, Content, Container, Icon, Right,Item, Input, Text } from 'native-base';

const DATA = [
  'https://swebtoon-phinf.pstatic.net/20190116_203/15476092508381Ywkd_JPEG/10_ipad.jpg',
  'https://teknologi.id/wp-content/uploads/2018/12/gugSgYv-768x565.jpg',
  'http://st.cdjapan.co.jp/pictures/l/08/09/2019CL-40.jpg?v=1',


]

function AddFav( title ) {
return (
<View> 
<View style={styles.item}>
  <Image source={{uri: title }}
  style={{width: 40, height: 45, borderWidth:2, borderColor:'grey'}} />
  <View style={styles.list}>
    <Text>Judul Webtoon</Text>
        <Text>132 Favorite</Text>
  </View>
</View>
</View>
);
}



export default function app() {
console.disableYellowBox=true;
return (
<Container style={{backgroundColor:''}}>
<Content>
  <View style={styles.content}>

  <View style={styles.content}>
    <View>
      <Item rounded style={styles.input}>
      <Input/>
      <Right><Icon name='search' style={styles.icon}/></Right>
      </Item>
    </View>
  </View>

<SafeAreaView>
<FlatList
  data={DATA}
  renderItem={({ item }) => AddFav(item)}
  keyExtractor={item => item}
/>
</SafeAreaView>
  </View>
  
  </Content>
</Container>


);

}

const styles = StyleSheet.create({

item: {
backgroundColor: 'white',
padding: 10,
marginTop: 8,
marginHorizontal: 10,
flexDirection:'row'
},
FavItem: {
backgroundColor: 'white',
padding: 5,
marginTop: 8,
marginHorizontal: 2,
marginStart: 10
},
title: {
fontSize: 32,
},
favorite: {
marginTop:1,
height:20,
justifyContent: 'center',
borderRadius: 1
},
list: {
marginStart: 15,
},
ListFav: {
textAlign:'center'
},content: {
flex : 1,
margin:10
},
input: {
height: 40,
marginBottom:15,
borderRadius:8
},
icon: {
marginEnd:10
}
});

