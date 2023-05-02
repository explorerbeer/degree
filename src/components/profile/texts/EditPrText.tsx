import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {colors} from '../../../colors/colors';

interface IEditPrText {
  editTitle: string;
}

export const EditPrText = ({editTitle}: IEditPrText) => {
  return <Text style={styles.editProfileTextStyle}>{editTitle}</Text>;
};

const styles = StyleSheet.create({
  editProfileTextStyle: {
    textAlign: 'center',
    color: colors.GRAYTEXT,
    fontSize: 14,
    paddingTop: 5,
    fontFamily: 'Poppins-Regular',
  },
});
