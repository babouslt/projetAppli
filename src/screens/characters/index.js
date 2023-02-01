import React from 'react';
import axios from 'axios';
import {View, Text, FlatList, Input, TextInput} from 'react-native';
import {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import Logo from '../../components/logo';
import Buttons from '../../components/buttons';
import Title from '../../components/title';
import Character from '../../components/character';
import SearchBar from '../../components/searchBar';
function Characters() {
  const [getCharacters, setCharacters] = useState([]);
  const [getCrews, setCrews] = useState([]);
  const [getSearch, setSearch] = useState('');
  useEffect(() => {
    axios
      .get('https://api.api-onepiece.com/crews')
      .then(res => {
        setCrews(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get('https://api.api-onepiece.com/characters')
      .then(res => {
        if (res.data.age == '') {
          res.data.age = 'Unknown';
        }
        if (res.data.crew == '') {
          res.data.crew = '';
        }
        setCharacters(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const filteredCharacters = getCharacters.filter(character => {
    return character.french_name.toLowerCase().includes(getSearch);
  });
  const searchBarToPage = dataSearchBarToPage => {
    setSearch(dataSearchBarToPage);
  };
  const clear = () => {
    getCharacters.map(character => {
      if (character.age == '') {
        character.age = 'Unknown';
      }
      if (character.bounty == '') {
        character.bounty = 'Unknown';
      }
      if (character.status == 'vivant') {
        character.status = 'Alive';
      }
      if (character.status == 'décédé') {
        character.status = 'Dead';
      }
    });
  };
  clear();
  const ItemView = ({item}) => {
    return (
      <View style={styles.character}>
        <Text style={styles.nameText}>{item.french_name}</Text>
        <Text style={styles.bountyText}>Bounty : {item.bounty}</Text>
        <Text style={styles.ageText}>Age : {item.age}</Text>
        <Text style={styles.statusText}>Status : {item.status}</Text>
      </View>
    );
  };
  return (
    <View>
      <Logo></Logo>
      <Buttons></Buttons>
      <View style={{alignItems: 'center'}}>
        <Title title="CHARACTERS" />
        <SearchBar
          searchBarToPage={searchBarToPage}
          textInput="Search a character"
        />
        <FlatList
          style={{top: 20}}
          data={filteredCharacters}
          keyExtractor={(item, index) => index.toString()}
          renderItem={ItemView}
        />
      </View>
    </View>
  );
}

export default Characters;

const styles = StyleSheet.create({
  character: {
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
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
  bountyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  ageText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  crewText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  statusText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});
