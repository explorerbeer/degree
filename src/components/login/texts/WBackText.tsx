import React, { useContext } from 'react';
import { Text, StyleSheet } from 'react-native';
import { colors } from '../../../colors/colors';
import { ThemeContext } from '../../../ThemeContext';

interface IWBackText {
  wBackTitle: string;
}

export const WBackText = ({ wBackTitle }: IWBackText) => {
  const { darkMode } = useContext(ThemeContext);
  const textColor = darkMode ? colors.WHITETEXT : colors.BLACKTEXT;
  const textStyle = {
    color: textColor,
  };

  return (
    <Text style={[styles.wBackTextStyle, textStyle]}>
      {wBackTitle}
    </Text>
  );
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
