import React from 'react';
import axios from 'axios';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useEffect, useState} from 'react';
import Logo from '../../components/logo';
import Buttons from '../../components/buttons';
import Title from '../../components/title';
import SearchBar from '../../components/searchBar';

function Sagas() {
  const [getSagas, setSagas] = useState([]);
  const [getSearch, setSearch] = useState('');

  useEffect(() => {
    axios
      .get('https://api.api-onepiece.com/sagas')
      .then(res => {
        setSagas(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  const filteredSaga = getSagas.filter(saga => {
    return saga.saga_title.toLowerCase().includes(getSearch);
  });
  const searchBarToPage = dataSearchBarToPage => {
    setSearch(dataSearchBarToPage);
  };
  const ItemView = ({item}) => {
    return (
      <View style={styles.saga}>
        <Text style={styles.sagaTitleText}>{item.saga_title}</Text>
        <Text style={styles.chapterText}>Chapter : {item.saga_chapitre}</Text>
        <Text style={styles.episodesText}>Episodes : {item.saga_episode}</Text>
      </View>
    );
  };

  return (
    <View>
      <Logo></Logo>
      <Buttons></Buttons>
      <View style={{alignItems: 'center'}}>
        <Title title="SAGAS" />
        <SearchBar
          searchBarToPage={searchBarToPage}
          textInput="Search a saga"
        />
        <FlatList
          style={{top: 20}}
          data={filteredSaga}
          keyExtractor={(item, index) => index.toString()}
          renderItem={ItemView}
        />
      </View>
    </View>
  );
}

export default Sagas;

const styles = StyleSheet.create({
  saga: {
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
  sagaTitleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
  chapterText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  episodesText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});
