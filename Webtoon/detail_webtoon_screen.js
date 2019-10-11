import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet,Dimensions, Image} from 'react-native';
import { Button, Label, Content, Container, Icon, Right,Item, Input, Text, Header } from 'native-base';

const DATA = [
  'https://swebtoon-phinf.pstatic.net/20190116_203/15476092508381Ywkd_JPEG/10_ipad.jpg',
  'https://teknologi.id/wp-content/uploads/2018/12/gugSgYv-768x565.jpg',
  'http://st.cdjapan.co.jp/pictures/l/08/09/2019CL-40.jpg?v=1',  
]

function AddFav( title, x ) {
  return (
    <View onPress={() => x.navigate('DetailEpisode')}> 
      <View onPress={() => x.navigate('DetailEpisode')} style={styles.item}>
        <Image onPress={() => x.navigate('DetailEpisode')} source={{uri: title }}
        style={{width: 40, height: 45, borderWidth:2, borderColor:'grey'}} />
        <View style={styles.list}>
          <Text onPress={() => x.navigate('DetailEpisode')}>Ep.3</Text>
          <Text onPress={() => x.navigate('DetailEpisode')}>1 Januari 2019</Text>
        </View>
      </View>
    </View>
  );
}


class Detail extends React.Component {

  render() {

  console.disableYellowBox=true;
  return (
    <Container style={{backgroundColor:''}}>
      
      <Content>

        <View>
        <Image source={{uri :'https://teknologi.id/wp-content/uploads/2018/12/gugSgYv-768x565.jpg'}} 
        style={styles.detail}/>
        </View>

        <View style={styles.content}>

          

    <SafeAreaView>  
      <FlatList
      
        data={DATA}
        renderItem={({ item }) => AddFav(item , this.props.navigation)}
        keyExtractor={item => item}
      />
    </SafeAreaView>
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
    borderRadius:15
  },
  icon: {
    marginEnd:10
  },
  Label: {
    flex:5,
    textAlignVertical:'center',
    justifyContent:'center',
    color: 'white',
    fontWeight:'bold',
    marginLeft:10
  },detail: {
    height: 200,
    borderWidth:2,
  },
});

export default Detail;