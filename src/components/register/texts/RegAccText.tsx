import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {colors} from '../../../colors/colors';

interface IRegAccText {
  regTitle: string;
}

export const RegAccText = ({regTitle}: IRegAccText) => {
  return <Text style={styles.regAccTextStyle}>{regTitle}</Text>;
};

const styles = StyleSheet.create({
  regAccTextStyle: {
    fontSize: 30,
    color: colors.BLACKTEXT,
    paddingLeft: 30,
    paddingTop: 100,
    fontFamily: 'Poppins-SemiBold',
  },
});
