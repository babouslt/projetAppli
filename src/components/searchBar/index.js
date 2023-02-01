import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {useState} from 'react';

const SearchBar = ({searchBarToPage, textInput}) => {
  const [getSearch, setSearch] = useState('');
  const handleSearch = text => {
    searchBarToPage(text.toLowerCase());
    setSearch(text.toLowerCase());
  };
  return (
    <TextInput
      placeholder={textInput}
      onChangeText={handleSearch}
      value={getSearch}
      style={styles.searchBar}
    />
  );
};

const styles = StyleSheet.create({
  searchBar: {
    color: '#000',
    height: 40,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    textAlign: 'center',
  },
});
export default SearchBar;
