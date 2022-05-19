import React from 'react';
import {Text, View} from 'react-native';

const HomeMap = props => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        height: 300,
        backgroundColor: '#A0AEFC',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>The map</Text>
    </View>
  );
};
export default HomeMap;
