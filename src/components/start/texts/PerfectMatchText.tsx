import { Text, StyleSheet } from 'react-native';
import { colors } from '../../../colors/colors';
import React, { useContext } from 'react';
import { ThemeContext } from '../../../ThemeContext';

interface IPerfectMatchText {
  perfMatchTitle: string;
}

export const PerfectMatchText = ({
  perfMatchTitle,
}: IPerfectMatchText) => {
  const { darkMode } = useContext(ThemeContext);
  const textColor = darkMode ? colors.WHITETEXT : colors.BLACKTEXT;
  const textStyle = {
    color: textColor,
  };
  return (
    <Text style={[styles.perfMatchTextStyle, textStyle]}>
      {perfMatchTitle}
    </Text>
  );
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
