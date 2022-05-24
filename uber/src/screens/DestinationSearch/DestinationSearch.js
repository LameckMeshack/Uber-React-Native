import React, {useState, useEffect} from 'react';
import {View, SafeAreaView} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import styles from './destinationStyles';
const DestinatioSearch = props => {
  const [origin, setOrigin] = useState('');
  const [desination, setDesination] = useState('');

  useEffect(() => {
    if (origin && desination) {
      console.warn('Redirect to results');
    }
  }, [desination, origin]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="From"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            setOrigin(data, details);
          }}
          styles={{
            textInput: styles.textInput,
          }}
          query={{
            key: 'AIzaSyD0gdWKMjP8f18RG4rE-pKjbBwN6hnxMS4',
            language: 'en',
          }}
        />
        <GooglePlacesAutocomplete
          placeholder="Where to"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            setDesination(data, details);
          }}
          styles={{
            textInput: styles.textInput,
          }}
          query={{
            key: 'AIzaSyD0gdWKMjP8f18RG4rE-pKjbBwN6hnxMS4',
            language: 'en',
          }}
        />
      </View>
    </SafeAreaView>
  );
};
export default DestinatioSearch;
