import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Image} from 'react-native';
import { Button, Label, Content, Container, Icon, Right,Item, Input, Text } from 'native-base';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';


const DATA = [
  'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Frobsalkowitz%2Ffiles%2F2018%2F08%2FBACKCHANNEL_keyart-2-e1535581798442.jpg',
  'https://swebtoon-phinf.pstatic.net/20190116_203/15476092508381Ywkd_JPEG/10_ipad.jpg',
  'https://teknologi.id/wp-content/uploads/2018/12/gugSgYv-768x565.jpg',
  'http://st.cdjapan.co.jp/pictures/l/08/09/2019CL-40.jpg?v=1',
]

function AddFav( title, x ) {
  return (
    <View> 
      <View style={styles.item}>
        <Image source={{uri: title }}
        style={{width: 40, height: 45, borderWidth:2, borderColor:'#f3f1ef'}} />
        <View style={styles.list}>
          <Text style={{fontWeight:'bold'}} onPress={() => x.navigate('DetailEdit')}>Judul Webtoon</Text>
              <Text>30 Episode(s)</Text>
        </View>
      </View>
    </View>
  );
}

class CreationScreen extends React.Component {
  render() {
    return (
      <Container style={{backgroundColor:''}}>
      <Content>
        <View style={styles.content}>     
        <View style={styles.content}>
        </View>

    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={({ item }) => AddFav(item , this.props.navigation)}
        keyExtractor={item => item}
      />
    </SafeAreaView>
        </View>
        <View style={{alignItems:'center'}}>
        <Button onPress={() => this.props.navigation.navigate('CreateWebtoon')} rounded style={{backgroundColor:'#f64747'}}>
        <Icon name='add' style={{color:'white',}}></Icon>
        </Button>
        </View>
        </Content>
      </Container>
    );
  }
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
    marginTop: 8,
    marginHorizontal: 15

  },
  title: {
    fontSize: 32,
  },
  favorite: {
    marginTop:1,
    height:20,
    justifyContent: 'center',
    borderRadius: 1,
    backgroundColor:'#f64747'
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
});

export default CreationScreen;
