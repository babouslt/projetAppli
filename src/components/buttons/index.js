import React from 'react';
import {FlatList, Image, View, Text, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const Buttons = () => {
  const [dataSource, setDataSource] = useState([
    {id: 1, title: 'Home'},
    {id: 2, title: 'Characters'},
    {id: 3, title: 'Demon Fruits'},
    {id: 4, title: 'Sagas'},
    {id: 5, title: 'News'},
  ]);
  const navigation = useNavigation();

  const ItemView = ({item}) => {
    return (
      <View>
        <TouchableOpacity onPress={() => pressButton(item)} activeOpacity={0.5}>
          <View
            style={{
              borderWidth: 1,
              borderColor: 'white',
              borderRadius: 20,
              width: 'auto',
              height: 'auto',
              padding: 5,
            }}>
            <Text style={{fontSize: 20, color: '#fff'}}>
              {item.title.toUpperCase()}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const pressButton = item => {
    // Function for click on an item
    navigation.navigate(item.title);
  };

  return (
    <SafeAreaView>
      <FlatList
        horizontal
        data={dataSource}
        keyExtractor={(item, index) => index.toString()}
        renderItem={ItemView}
      />
    </SafeAreaView>
  );
};

export default Buttons;
