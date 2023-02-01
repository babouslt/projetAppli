import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Title = props => {
  return (
    <View>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginTop: 10,
    fontWeight: 'bold',
    color: 'white',
  },
});
