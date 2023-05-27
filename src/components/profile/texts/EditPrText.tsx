import React, { useContext } from 'react';
import { Text, StyleSheet } from 'react-native';
import { colors } from '../../../colors/colors';
import { ThemeContext } from '../../../ThemeContext';

interface IEditPrText {
  editTitle: string;
}

export const EditPrText = ({ editTitle }: IEditPrText) => {
  const { darkMode } = useContext(ThemeContext);

  const textColor = darkMode ? colors.WHITETEXT : colors.GRAYTEXT;
  const textStyle = { color: textColor };
  return (
    <Text style={[styles.editProfileTextStyle, textStyle]}>
      {editTitle}
    </Text>
  );
};

const styles = StyleSheet.create({
  editProfileTextStyle: {
    textAlign: 'center',
    fontSize: 14,
    paddingTop: 5,
    fontFamily: 'Poppins-Regular',
  },
});
