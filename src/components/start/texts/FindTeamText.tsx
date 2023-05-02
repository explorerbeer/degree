import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {colors} from '../../../colors/colors';

interface IFindTeamText {
  findTeamTitle: string;
}

export const FindTeamText = ({findTeamTitle}: IFindTeamText) => {
  return <Text style={styles.findTeamTextStyle}>{findTeamTitle}</Text>;
};

const styles = StyleSheet.create({
  findTeamTextStyle: {
    fontSize: 16,
    textAlign: 'center',
    color: colors.GRAYTEXT,
    marginBottom: 40,
    paddingHorizontal: 30,
    fontFamily: 'Poppins-Regular',
  },
});
