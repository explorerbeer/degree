import React, { useContext } from 'react';
import { Text, StyleSheet } from 'react-native';
import { colors } from '../../../colors/colors';
import { ThemeContext } from '../../../ThemeContext';

interface IRegAccText {
  regTitle: string;
}

export const RegAccText = ({ regTitle }: IRegAccText) => {
  const { darkMode } = useContext(ThemeContext);
  const textColor = darkMode ? colors.WHITETEXT : colors.BLACKTEXT;
  const backStyle = {
    color: textColor,
  };
  return (
    <Text style={[styles.regAccTextStyle, backStyle]}>
      {regTitle}
    </Text>
  );
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
