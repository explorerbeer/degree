import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {colors} from '../../../colors/colors';

interface INameText {
  nameTitle: string;
}

export const NameText = ({nameTitle}: INameText) => {
  return <Text style={styles.nameTextStyle}>{nameTitle}</Text>;
};

const styles = StyleSheet.create({
  nameTextStyle: {
    paddingTop: 25,
    textAlign: 'center',
    fontSize: 30,
    color: colors.BLACKTEXT,
    fontFamily: 'Poppins-Medium',
  },
});
