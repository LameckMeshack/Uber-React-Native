import React from 'react';
import {View} from 'react-native';
import CovidMessage from '../../components/CovidMessage/CovidMessage';
import HomeMap from '../../components/HomeMap/HomeMap';
import HomeSearch from '../../components/HomeSearch/HomeSearch';

const HomeScreen = props => {
  return (
    <View>
      <HomeMap />
      <CovidMessage />
      <HomeSearch />
    </View>
  );
};
export default HomeScreen;
