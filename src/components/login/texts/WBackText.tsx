import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {colors} from '../../../colors/colors';

interface IWBackText {
  wBackTitle: string;
}

export const WBackText = ({wBackTitle}: IWBackText) => {
  return <Text style={styles.wBackTextStyle}>{wBackTitle}</Text>;
};

const styles = StyleSheet.create({
  wBackTextStyle: {
    fontSize: 30,
    color: colors.BLACKTEXT,
    paddingLeft: 30,
    paddingTop: 100,
    fontFamily: 'Poppins-SemiBold',
  },
});
