import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const Logo = () => {
  return (
    <View style={styles.container}>
      {/* <Image
        source={require(`OnePiece/src/images/zoro.jpg`)}
        style={{height: 87, width: 44}}
      /> */}
      <Image
        source={require(`OnePieceV2/src/images/Logo.png`)}
        style={styles.image}
      />
      {/* <Image
        source={require(`OnePiece/src/images/zoro.jpg`)}
        style={{height: 87, width: 44}}
      /> */}
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  container: {
    marginLeft: '22%',
  },
  image: {
    height: 103,
    width: 217,
  },
});
