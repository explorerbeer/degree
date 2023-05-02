import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../colors/colors';
import {LikeButton} from '../../home/buttons/LikeButton';
import {ApplyLikedButton} from '../buttons/ApplyLikedButton';

interface ILikedProps {
  teamTitle: string;
  specs: string;
  city: string;
}

export const Liked = ({teamTitle, specs, city}: ILikedProps) => {
  const likeLog = () => {
    console.log('liked');
  };
  return (
    <View style={styles.flatListStyle}>
      <View style={styles.teamBlockStyle}>
        <Text style={styles.teamTextStyle}>{teamTitle}</Text>
        <View style={styles.LikeButtonStyle}>
          <LikeButton onPress={likeLog} />
        </View>
      </View>
      <Text style={styles.specTextStyle}>{specs}</Text>
      <Text style={styles.cityTextStyle}>{city}</Text>
      <ApplyLikedButton onPress={likeLog} title={'Respond'} />
    </View>
  );
};

const styles = StyleSheet.create({
  flatListStyle: {
    backgroundColor: colors.SHADOW,
    marginBottom: 20,
    marginHorizontal: 10,
    borderRadius: 16,
    height: 155,
    width: 335,
    shadowOpacity: 0.1,
    shadowOffset: {width: 5, height: 5},
    shadowRadius: 5,
  },
  teamTextStyle: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: colors.GRAYTEXT,
    marginTop: 10,
    marginLeft: 35,
    marginBottom: 15,
  },
  teamBlockStyle: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  LikeButtonStyle: {
    marginRight: 15,
  },
  specTextStyle: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    marginLeft: 35,
    color: colors.BLACKTEXT,
  },
  cityTextStyle: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: colors.GRAYTEXT,
    marginLeft: 35,
  },
});
