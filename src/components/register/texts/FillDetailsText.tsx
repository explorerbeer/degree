import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {colors} from '../../../colors/colors';

interface IFillDetailsText {
  fDetailsTitle: string;
}

export const FillDetailsText = ({fDetailsTitle}: IFillDetailsText) => {
  return <Text style={styles.fillDetailsTextStyle}>{fDetailsTitle}</Text>;
};

const styles = StyleSheet.create({
  fillDetailsTextStyle: {
    fontSize: 16,
    color: colors.GRAYTEXT,
    textAlign: 'left',
    paddingHorizontal: 30,
    paddingRight: 110,
    marginTop: 10,
    fontFamily: 'Poppins-Regular',
  },
});
