import React from 'react';
import axios from 'axios';
import {View, Text, ListItem} from 'react-native';
import {useEffect, useState} from 'react';
import Buttons from '../../components/buttons';
import Logo from '../../components/logo';

const News = () => {
  const [getTweets, setTweets] = useState([]);
  const username = 'twitter'; // remplacez par le nom de compte souhaité
  const numTweets = 20; // nombre de tweets à récupérer
  const apiUrl = `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${username}&count=${numTweets}`;
  const bearerToken =
    'AAAAAAAAAAAAAAAAAAAAAGBXlAEAAAAAnghL2IfFtF3bTSVF%2B%2FDTOklcAUg%3D9cBAb2X5xeDUoV67yoAF0EDtGwBEpiZBbCSC1Ttm7nkN5QHW0M';

  useEffect(() => {
    axios
      .get(apiUrl, {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      })
      .then(res => {
        setTweets(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <View>
      <Logo />
      <Buttons />
      {getTweets.map(tweets => {
        <ListItem
          key={tweets.id_str}
          title={
            <Text>
              {tweets.text}
              {'\n'}
              <Text style={{fontSize: 12}}>{tweets.created_at}</Text>
            </Text>
          }
          bottomDivider
        />;
      })}
    </View>
  );
};

export default News;
