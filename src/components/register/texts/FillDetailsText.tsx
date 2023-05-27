import React, { useContext } from 'react';
import { Text, StyleSheet } from 'react-native';
import { colors } from '../../../colors/colors';
import { ThemeContext } from '../../../ThemeContext';

interface IFillDetailsText {
  fDetailsTitle: string;
}

export const FillDetailsText = ({
  fDetailsTitle,
}: IFillDetailsText) => {
  const { darkMode } = useContext(ThemeContext);
  const textColor = darkMode ? colors.WHITETEXT : colors.GRAYTEXT;
  const textStyle = {
    color: textColor,
  };
  return (
    <Text style={[styles.fillDetailsTextStyle, textStyle]}>
      {fDetailsTitle}
    </Text>
  );
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
