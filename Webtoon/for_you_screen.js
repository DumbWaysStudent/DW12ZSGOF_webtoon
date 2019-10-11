import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Image} from 'react-native';
import { Button, Label, Content, Container, Icon, Right,Item, Input, Text } from 'native-base';
import Slideshow from 'react-native-image-slider-show';



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
        style={{width: 75, height: 80, borderWidth:2, borderColor:'grey'}} />
        <View style={styles.list}>
          <Text onPress={() => x.navigate('Detail')}>Judul Webtoon</Text>
            <Button style={styles.favorite}>
              <Text> + Favorite</Text>
            </Button>
        </View>
      </View>
    </View>
  );
}

function Fav(title) {
  return (
    <View> 
      <View style={styles.FavItem}>
        <Image source={{uri: title}}
        style={{width: 100, height: 100, borderWidth:2, borderColor:'grey'}} />
        <View style={styles.ListFav}>
          <Text>Judul Webtoon</Text>
        </View>
      </View>
    </View>
  ); 
}

class DetailScreen extends React.Component {

  constructor(props) {
    super(props);
 
    this.state = {
      position: 1,
      interval: null,
      dataSource: [{
      title: '',
      url: 'http://st.cdjapan.co.jp/pictures/l/08/09/2019CL-40.jpg?v=1'
}, {
      title: '',
      url: 'https://swebtoon-phinf.pstatic.net/20190116_203/15476092508381Ywkd_JPEG/10_ipad.jpg'
}, {
      title: '',
      url: 'https://teknologi.id/wp-content/uploads/2018/12/gugSgYv-768x565.jpg'
}],
    };
  }
 
  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
        });
      }, 2000)
    });
  }
 
  componentWillUnmount() {
    clearInterval(this.state.interval);
  }


  render() {
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

    <Slideshow 
        dataSource={this.state.dataSource}
        position={this.state.position}
        onPositionChanged={position => this.setState({ position })} />

      <Label style={{marginStart:10, marginTop:10, fontWeight:'bold'}}>Favourite</Label>   
      <FlatList horizontal
        showsHorizontalScrollIndicator={false}
        data={DATA}
        renderItem={({ item }) => Fav(item)}
        keyExtractor={item => item}
      />
      
      <Label style={{marginStart:20, fontWeight:'bold', marginTop:15}}>All</Label>
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
    marginTop: 8,
    marginHorizontal:10

  },
  title: {
    fontSize: 32,
  },
  favorite: {
    marginTop:20,
    justifyContent: 'center',
    borderRadius: 1,
    backgroundColor:'#f64747', 
    height:30, 
    borderRadius:5
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
    borderRadius:10,
    borderWidth:2,
    borderColor:'grey'
  },
  icon: {
    marginEnd:10,
    color:'grey'
  }
});

export default DetailScreen;

