/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {enableLatestRenderer} from 'react-native-maps';

import DestinatioSearch from './src/screens/DestinationSearch/DestinationSearch';

import HomeScreen from './src/screens/HomeScreen';
import SearchResults from './src/screens/SearchResults/SearchResults';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <HomeScreen />
      {/* <DestinatioSearch /> */}
      {/* <SearchResults /> */}
    </>
  );
};

export default App;
