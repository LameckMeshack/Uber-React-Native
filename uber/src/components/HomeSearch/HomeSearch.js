/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const HomeSearch = props => {
  return (
    <View>
      {/* Input box */}
      <View style={styles.inputBox}>
        <Text style={[styles.inputText, styles.blak]}>Where To</Text>
        <View style={styles.timeContainer}>
          <AntDesign name={'clockcircle'} size={16} color={'black'} />
          <Text style={styles.blak}>Now</Text>
          <MaterialIcons
            name={'keyboard-arrow-down'}
            size={16}
            color={'black'}
          />
        </View>
      </View>

      {/* Previous destination */}
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <AntDesign name={'clockcircle'} size={20} color={'white'} />
        </View>
        <Text style={[styles.blak, styles.destinationText]}>
          Quivers Lounge
        </Text>
      </View>
      {/* Home destination */}
      <View style={styles.row}>
        <View style={[styles.iconContainer, {backgroundColor: '#218cff'}]}>
          <Entypo name={'home'} size={20} color={'#ffffff'} />
        </View>
        <Text style={[styles.destinationText, styles.blak]}>
          Naivas Ruaraka
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: '#d9d9d9',
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputText: {
    fontSize: 20,
    fontWeight: '600',
  },
  timeContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 50,
    justifyContent: 'space-between',
    width: 90,
  },
  blak: {
    color: 'black',
  },
  row: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#dbdbdb',
  },

  iconContainer: {
    padding: 10,
    borderRadius: 25,
    backgroundColor: '#b3b3b3',
  },
  destinationText: {
    marginLeft: 10,
    fontWeight: '500',
    fontSize: 16,
  },
});

export default HomeSearch;
