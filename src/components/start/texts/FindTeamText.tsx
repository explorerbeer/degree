import React, { useContext } from 'react';
import { Text, StyleSheet } from 'react-native';
import { colors } from '../../../colors/colors';
import { ThemeContext } from '../../../ThemeContext';

interface IFindTeamText {
  findTeamTitle: string;
}

export const FindTeamText = ({ findTeamTitle }: IFindTeamText) => {
  const { darkMode } = useContext(ThemeContext);
  const textColor = darkMode ? colors.OPACITYBUTTON : colors.GRAYTEXT;
  const textStyle = {
    color: textColor,
  };
  return (
    <Text style={[styles.findTeamTextStyle, textStyle]}>
      {findTeamTitle}
    </Text>
  );
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
