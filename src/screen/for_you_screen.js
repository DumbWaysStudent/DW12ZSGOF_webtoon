import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Image, route, TouchableOpacity} from 'react-native';
import { Button, Label, Content, Container, Icon, Right,Item, Input, Text, } from 'native-base';
import Slideshow from 'react-native-image-slider-show';
import * as actionWebtoons from '../redux/actions/actionWebtoon'
import { connect } from 'react-redux'




const DATA = [
  {
    url : 'https://teknologi.id/wp-content/uploads/2018/12/gugSgYv-768x565.jpg',
    title : 'Dr.Stone',
  },
  {
    url : 'https://i.kym-cdn.com/entries/icons/original/000/030/978/demon-slayer-poster-1163650-1280x0.jpeg',
    title : 'Kimetsu No Yaiba',
  },
  {
    url : 'https://electricbento.com/wp-content/uploads/2019/07/Attack-on-titan-2-final-battle-1.jpg',
    title : 'Attack On Titan',
  },
  {
    url : 'https://occ-0-1068-92.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABf_Q6TuJMGayw1sOFrsEpAXK4TwRtwJjaQ5N1ovAn02CeyfJzoAyHtGu4Rx6NnH1jPb9LsGIwidYfbl2jgtqQG8jKq7i-fmd_Q.jpg?r=d7c',
    title : 'One Punch Man',
  }
]

function AddFav( title, x ) {
  return (
    <View> 
      <View style={styles.item}>
      <TouchableOpacity onPress={() => x.navigate('Detail', {
              titleWebtoon: title.title,
              urlWebtoon: title.image,
              otherParam: 'anything you want here',
            })}>
        <Image source={{uri: title.image }}
            style={{width: 75, height: 80, borderRadius:8}} />
      </TouchableOpacity>
        <View style={styles.list}>
          <Text style={{width:200, fontSize:14}} onPress={() => x.navigate('Detail')}>{title.title}</Text>
            <Button style={styles.favorite}>
              <Text style={{fontSize:12}}> + Favorite</Text>
            </Button>
        </View>
      </View>
    </View>
  );
}

function Fav(title, x) {
  return (
    <View> 
      <View style={styles.FavItem}>
      <TouchableOpacity onPress={() => x.navigate('Detail', {
              titleWebtoon: title.title,
              urlWebtoon: title.image,
              otherParam: 'anything you want here',
            })}>
        <Image source={{uri: title.image}}
            style={{width: 150, height: 90, borderRadius:6}} />
        </TouchableOpacity>
        <View style={styles.ListFav}>
          <Text style={{width:150, fontSize:14}} onPress={() => x.navigate('Detail')}>{title.title}</Text>
        </View>
      </View>
    </View>
  ); 
}

class ForYou extends React.Component {

  constructor(props) {
    super(props);
 
    this.state = {
      position: 1,
      interval: null,
      dataSource: [{
      title: '',
      url: 'https://akcdn.detik.net.id/visual/2019/05/28/f5bf410e-9c4d-43d7-8682-e964311ebd01_169.jpeg?w=900&q=90'
}, {
      title: '',
      url: 'https://www.inibaru.id/nuploads/46/virgo.jpg'
}, {
      title: '',
      url: 'https://obs.line-scdn.net/0hrDZnnvgBLWtnFwZnDb1SPF1BLgRUez5oAyF8dTd5c18fIDk6XSY3XksUIQ9DJWo1CSVgCUsfNload2w0DyU3/w580'
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
 
 async componentDidMount(){
 await this.props.handleGetWebtoons()
  }
  
componentWillUnmount() {
  clearInterval(this.state.interval);
  }


  render() {
    const webtoons=this.props.webtoonsLocal.webtoons
    console.disableYellowBox=true;
    return (
      <Container>
      <Content>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail')}>
        <Slideshow
        dataSource={webtoons}
        position={this.state.position}
        onPositionChanged={position => this.setState({ position })} />
      </TouchableOpacity>


    <SafeAreaView>
      <View>
      <Label style={{marginStart:10, marginTop:10, fontWeight:'bold'}}>Favorite</Label> 
      </View>  
      <FlatList horizontal
        showsHorizontalScrollIndicator={false}
        data={webtoons}
        renderItem={({ item }) => Fav(item, this.props.navigation)}
        keyExtractor={item => item}
      />
      
      <Label style={{marginStart:10, fontWeight:'bold', marginTop:15}}>All</Label>
      <FlatList
        data={webtoons}
        renderItem={({ item }) => AddFav(item , this.props.navigation)}
        keyExtractor={item => item}
      />
    </SafeAreaView>
        
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
    marginHorizontal: 5,
    flexDirection:'row'
  },
  imageFav: {
    
  },
  FavItem: {
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
    width:100,
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
    marginHorizontal:10,
    borderRadius:10,
    borderWidth:2,
    borderColor:'grey'
  },
  icon: {
    marginEnd:10,
    color:'grey'
  }
});

const mapStateToProps = state => {
  return {
    webtoonsLocal: state.webtoons,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleGetWebtoons:()=> dispatch(actionWebtoons.handleGetWebtoons())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForYou);

