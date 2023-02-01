import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import Logo from '../../components/logo';
import Buttons from '../../components/buttons';
import Title from '../../components/title';
import Sound from 'react-native-sound';
import weAre from '../../musics/we_are.mp3';
import {StyleSheet} from 'react-native';
function Home() {
  Sound.setCategory('Playback');
  var weAre = new Sound(require('../../musics/we_are.mp3'), (error, sound) => {
    if (error) {
      alert('error' + error.message);
      return;
    }
    weAre.play(() => {
      weAre.release();
    });
  });
  return (
    <View>
      <Logo />
      <Buttons />
      <View style={{alignItems: 'center'}}>
        <Title title="HOME" />
        <Image
          source={require('OnePieceV2/src/images/luffywano.jpg')}
          style={styles.image}
        />
        <Text style={styles.textIntro}>
          Salut a toi Grand joueur de Nami! {'\n'}
          Tu trouveras dans cette application plein d'information sur l'univers
          de One Piece. {'\n'} Que ce soit sur les personnages, les fruits du
          démons ou les arcs, tout y est. Tu retrouveras même une section news
          (petits problèmes)
        </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.textVersion}> Version 1.1 </Text>
        <Text style={styles.textMadeBy}> Made by @Babouslt sur insta</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 103,
    width: 217,
    marginTop: '2%',
  },
  textIntro: {
    marginTop: '5%',
    textAlign: 'center',
    fontSize: 17,
    color: 'white',
  },
  container: {
    marginTop: '70%',
    flexDirection: 'row',
  },
  textVersion: {
    marginLeft: '3%',
    color: 'white',
  },
  textMadeBy: {
    marginLeft: '25%',
    color: 'white',
  },
});
export default Home;
