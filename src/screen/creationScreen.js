import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Image} from 'react-native';
import { Button, Label, Content, Container, Icon, Right,Item, Input, Text, Fab } from 'native-base';


const DATA = [
  {
    url : 'https://teknologi.id/wp-content/uploads/2018/12/gugSgYv-768x565.jpg',
    title : 'Dr.Stone',
    jumlahEpisode : '4 Episode'
  },
  {
    url : 'https://i.kym-cdn.com/entries/icons/original/000/030/978/demon-slayer-poster-1163650-1280x0.jpeg',
    title : 'Kimetsu No Yaiba',
    jumlahEpisode : '127 Episode'
  },
  {
    url : 'https://electricbento.com/wp-content/uploads/2019/07/Attack-on-titan-2-final-battle-1.jpg',
    title : 'Attack On Titan',
    jumlahEpisode : '68 Episode'
  },
  {
    url : 'https://occ-0-1068-92.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABf_Q6TuJMGayw1sOFrsEpAXK4TwRtwJjaQ5N1ovAn02CeyfJzoAyHtGu4Rx6NnH1jPb9LsGIwidYfbl2jgtqQG8jKq7i-fmd_Q.jpg?r=d7c',
    title : 'One Punch Man',
    jumlahEpisode : '157 Episode'
  }
]

function AddFav( title, x ) {
  return (
    <View> 
      <View style={styles.item}>
        <Image source={{uri: title.url }}
        style={{width: 40, height: 45}} />
        <View style={styles.list}>
          <Text style={{fontWeight:'bold'}} onPress={() => x.navigate('DetailEdit')}>{title.title}</Text>
              <Text>{title.jumlahEpisode}</Text>
        </View>
      </View>
    </View>
  );
}

class CreationScreen extends React.Component {
  render() {
    console.disableYellowBox=true;
    return (
      <Container style={{backgroundColor:''}}>
      <Content>    
        <View style={styles.content}>
        </View>

      <SafeAreaView>
        <FlatList
          data={DATA}
          renderItem={({ item }) => AddFav(item , this.props.navigation)}
          keyExtractor={item => item}
        />
      </SafeAreaView>
        </Content>
        <View>
        <Fab onPress={() => this.props.navigation.navigate('CreateWebtoon')} position='bottomRight' style={{backgroundColor:'#f64747'}}><Icon name='add'/></Fab>
        </View>
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
