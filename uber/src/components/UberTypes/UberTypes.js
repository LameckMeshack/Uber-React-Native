/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Pressable, Text} from 'react-native';
import UberTypesRow from '../UberTypeRow/UberTypeRow';

import typesData from '../../assets/data/types';

const confirm = () => {
  console.warn('confirm uber');
};

const UberTypes = () => {
  return (
    <View>
      {typesData.map(type => (
        <UberTypesRow type={type} key={type.id} />
      ))}

      <Pressable
        onPress={confirm}
        style={{
          width: '100%',
          backgroundColor: 'black',
          margin: 10,
          padding: 10,
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
          }}>
          Confirm Uber
        </Text>
      </Pressable>
    </View>
  );
};
export default UberTypes;
