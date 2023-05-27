import React, { useContext } from 'react';
import { Text, StyleSheet } from 'react-native';
import { colors } from '../../../colors/colors';
import { ThemeContext } from '../../../ThemeContext';

interface INameText {
  nameTitle: string;
}

export const NameText = ({ nameTitle }: INameText) => {
  const { darkMode } = useContext(ThemeContext);

  const textColor = darkMode ? colors.WHITETEXT : colors.BLACKTEXT;
  const textStyle = { color: textColor };

  return (
    <Text style={[styles.nameTextStyle, textStyle]}>{nameTitle}</Text>
  );
};

const styles = StyleSheet.create({
  nameTextStyle: {
    paddingTop: 25,
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'Poppins-Medium',
  },
});
