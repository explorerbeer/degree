import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LikeButton} from '../buttons/LikeButton';
import {colors} from '../../../colors/colors';

export interface ISpecsProps {
  spec: string;
  city: string;
}

export const Specs: React.FC<ISpecsProps> = ({spec, city}) => {
  const likeAction = () => {
    console.log('liked');
  };

  return (
    <View style={styles.flatContainerStyle}>
      <View>
        <Text style={styles.specTextStyle}>{spec}</Text>
        <Text style={styles.cityTextStyle}>{city}</Text>
      </View>
      <View style={styles.likeStyle}>
        <LikeButton onPress={likeAction} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flatContainerStyle: {
    backgroundColor: colors.SHADOW,
    width: 335,
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    alignItems: 'center',
    borderRadius: 16,
    marginVertical: 10,
    shadowOpacity: 0.1,
    shadowOffset: {width: 5, height: 5},
    shadowRadius: 5,
  },
  specTextStyle: {
    marginLeft: 15,
    fontSize: 16,
    color: colors.BLACKTEXT,
    fontFamily: 'Poppins-Medium',
  },
  cityTextStyle: {
    marginLeft: 15,
    marginTop: 5,
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: colors.GRAYTEXT,
  },
  likeStyle: {
    paddingBottom: 10,
    paddingRight: 5,
  },
});
