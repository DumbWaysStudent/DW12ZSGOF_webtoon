import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet,Dimensions, Image, TouchableOpacity} from 'react-native';
import { Button, Label, Content, Container, Icon, Right,Item, Input, Text, Header } from 'native-base';
import * as actionWebtoons from '../redux/actions/actionWebtoon'
import { connect } from 'react-redux'

function AddFav( title, x ) {
  return (
    <View onPress={() => x.navigate('DetailEpisode')}> 
      <View onPress={() => x.navigate('DetailEpisode')} style={styles.item}>
      <TouchableOpacity onPress={() => x.navigate('DetailEpisode', {
              titleWebtoon: title.title,
              otherParam: 'anything you want here',
            })}>
        <Image source={{uri: title.url }} style={styles.Image} />
        </TouchableOpacity>
        <View style={styles.list}>
          <Text onPress={() => x.navigate('DetailEpisode')} style={styles.episodeTitle}>{title.title}</Text>
          <Text onPress={() => x.navigate('DetailEpisode')} style={styles.episode}>{title.lastUpdate}</Text>
        </View>
      </View>
    </View>
  );
}


class Detail extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('titleWebtoon', 'No Title'),
    };
  };

  async componentDidMount(){
    await this.props.handleGetWebtoons()
     }

  render() {
    console.disableYellowBox=true;
    const { navigation } = this.props;
    const urlWebtoon = navigation.getParam('urlWebtoon', 'NO-ID');

    const DATA = [
      {
        url : urlWebtoon,
        title : 'Episode 1 : Stone World',
        lastUpdate : '05 juli 2019'
      },
      {
        url : urlWebtoon,
        title : 'Episode 2 : King of the Stone World',
        lastUpdate : '12 juli 2019'
      },
      {
        url : urlWebtoon,
        title : 'Episode 3 : Weapons of Science',
        lastUpdate : '19 juli 2019'
      },
      {
        url : urlWebtoon,
        title : 'Episode 4 : Fire the Smoke Signal',
        lastUpdate : '26 juli 2019'
      }
    ]



  console.disableYellowBox=true;
  return (
    <Container style={{backgroundColor:''}}>
      <Content>
        <View style={{borderRadius:50}}>
        <Image source={{uri: urlWebtoon}}
        style={styles.detail}/>
        </View>
        <View style={styles.content}>

    <SafeAreaView>
      <Label style={{marginStart:15, fontWeight:'bold', marginBottom:10}}>4 Episode</Label>  
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
    padding: 4,
    marginHorizontal: 10,
    flexDirection:'row',
    borderBottomWidth:0.3,
    borderBottomColor:'grey'
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
  },
  content: {
    flex : 1,
    margin:10,
    marginTop: 30
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
  episode : {
    marginTop:2,
    color:'grey', 
    fontSize:13
  },
  Image : {
    width: 40,
     height: 45,
     borderRadius:3 
  },
  episodeTitle : {
    marginTop:2, 
    fontSize:15,
    fontWeight:'bold'
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
)(Detail);