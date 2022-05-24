import React from 'react';
import {View, Text, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../UberTypeRow/UberTypeRowStyles';
const UberTypesRow = props => {
  const {type} = props;
  const getImage = name => {
    if (name === 'UberX') {
      return require('../../assets/images/UberX.jpeg');
    } else if (name === 'Comfort') {
      return require('../../assets/images/Comfort.jpeg');
    } else {
      return require('../../assets/images/UberXL.jpeg');
    }
  };
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image style={styles.image} source={getImage(type.type)} />
      <View style={styles.middleContainer}>
        <Text style={styles.types}>
          {type.type}
          <Ionicons name={'person'} size={12} />3
        </Text>
        <Text style={styles.time}> {type.duration} drop off</Text>
      </View>
      <View style={styles.rightContainer}>
        <Ionicons name={'pricetag'} size={12} color={'#42d742'} />
        <Text style={styles.price}>est. Ksh {type.price} </Text>
      </View>
    </View>
  );
};
export default UberTypesRow;
