import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../../colors/colors';
import { ThemeContext } from '../../../ThemeContext';

interface IUserRespondsText {
  uTitle: string;
}

export const UserRespondsText = ({ uTitle }: IUserRespondsText) => {
  const { darkMode } = useContext(ThemeContext);
  const textColor2 = darkMode ? colors.WHITETEXT : colors.BLACKTEXT;
  const textStyle3 = {
    color: textColor2,
  };
  return (
    <View>
      <Text style={[styles.uTextStyle, textStyle3]}>{uTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  uTextStyle: {
    fontSize: 24,
    fontFamily: 'Poppins-Medium',
    paddingTop: 20,
    paddingLeft: 30,
    color: colors.BLACKTEXT,
  },
});
