import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {colors} from '../../../colors/colors';

interface IPerfectMatchText {
  perfMatchTitle: string;
}

export const PerfectMatchText = ({perfMatchTitle}: IPerfectMatchText) => {
  return <Text style={styles.perfMatchTextStyle}>{perfMatchTitle}</Text>;
};

const styles = StyleSheet.create({
  perfMatchTextStyle: {
    fontSize: 34,
    textAlign: 'center',
    color: colors.BLACKTEXT,
    marginBottom: 14,
    paddingHorizontal: 50,
    fontFamily: 'Poppins-SemiBold',
  },
});
