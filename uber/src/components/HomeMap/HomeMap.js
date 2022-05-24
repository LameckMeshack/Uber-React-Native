/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Image} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

import cars from '../../assets/data/cars';

const HomeMap = props => {
  const [cars, setCars] = useState([]);
  const getImage = type => {
    if (type === 'UberX') {
      return require('../../assets/images/top-UberX.png');
    }
    if (type === 'Comfort') {
      return require('../../assets/images/top-Comfort.png');
    }
    return require('../../assets/images/top-UberXL.png');
  };
  return (
    <View
      style={{
        height: 400,
        backgroundColor: '#A0AEFC',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <MapView
        style={{height: '100%', width: '100%'}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {cars.map(car => (
          <Marker
            key={car.id}
            coordinate={{latitude: car.latitude, longitude: car.longitude}}>
            <Image
              style={{
                width: 70,
                height: 70,
                resizeMode: 'contain',
                transform: [
                  {
                    rotate: `${car.heading}deg`,
                  },
                ],
              }}
              source={getImage(car.type)}
            />
          </Marker>
        ))}
      </MapView>
    </View>
  );
};
export default HomeMap;
