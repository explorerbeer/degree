import React, { useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { colors } from '../../../../colors/colors';
import { ThemeContext } from '../../../../ThemeContext';

interface IHintText {
  hintTitle: string;
}

export const HintText = ({ hintTitle }: IHintText) => {
  const { darkMode } = useContext(ThemeContext);

  const textColor = darkMode ? colors.WHITETEXT : colors.GRAYTEXT;
  const textStyle = { color: textColor };
  return (
    <View>
      <Text style={[styles.hintTextStyle, textStyle]}>
        {hintTitle}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  hintTextStyle: {
    fontSize: 12,
    marginLeft: 30,
    fontFamily: 'Poppins-Regular',
  },
});
