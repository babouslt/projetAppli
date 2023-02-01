import React from 'react';
import axios from 'axios';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useEffect, useState} from 'react';
import Logo from '../../components/logo';
import Buttons from '../../components/buttons';
import Title from '../../components/title';
import SearchBar from '../../components/searchBar';

function DemonFruits() {
  const [getDemonFruits, setDemonFruits] = useState([]);
  const [getSearch, setSearch] = useState('');

  useEffect(() => {
    axios
      .get('https://api.api-onepiece.com/fruits')
      .then(res => {
        setDemonFruits(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const filteredDemonFruits = getDemonFruits.filter(fruit => {
    return fruit.french_name.toLowerCase().includes(getSearch);
  });
  const searchBarToPage = dataSearchBarToPage => {
    setSearch(dataSearchBarToPage);
  };
  const ItemView = ({item}) => {
    return (
      <View style={styles.demonFruit}>
        <Text style={styles.romanNameText}>{item.roman_name}</Text>
        <Text style={styles.frenchNameText}>French Name : {item.french_name}</Text>
        <Text style={styles.typeText}>Type : {item.type}</Text>
      </View>
    );
  };

  return (
    <View>
      <Logo></Logo>
      <Buttons></Buttons>
      <View style={{alignItems: 'center'}}>
        <Title title="DEMON FRUITS" />
        <SearchBar
          searchBarToPage={searchBarToPage}
          textInput="Search a demon fruit"
        />
        <FlatList
          style={{top: 20}}
          data={filteredDemonFruits}
          keyExtractor={(item, index) => index.toString()}
          renderItem={ItemView}
        />
      </View>
    </View>
  );
}

export default DemonFruits;

const styles = StyleSheet.create({
  demonFruit: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    margin: 8,
  },
  romanNameText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
  frenchNameText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  typeText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});
