import React, { useContext } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colors } from '../../../colors/colors';
import { ThemeContext } from '../../../ThemeContext';

interface ILinkBlock {
  linkTitle: string;
  linkPlaceholder: string;
}

export const LinkBlock = ({
  linkTitle,
  linkPlaceholder,
}: ILinkBlock) => {
  const { darkMode } = useContext(ThemeContext);
  const textColor1 = darkMode ? colors.WHITETEXT : colors.GRAYTEXT;
  const textStyle1 = { color: textColor1 };
  const textColor2 = darkMode ? colors.WHITETEXT : colors.BLACKTEXT;
  const shadowColor = darkMode ? colors.DARKSHADOW : colors.SHADOW;
  const shadowColor2 = darkMode ? colors.DARKSHADOW : colors.SHADOW;
  const statusColor = darkMode
    ? colors.DARKBACK
    : colors.OPACITYBUTTON;
  const textStyle2 = {
    color: textColor2,
    backgroundColor: shadowColor,
    borderColor: shadowColor2,
  };
  const textStyle3 = {
    color: textColor2,
  };
  const shadowStyle = {
    backgroundColor: shadowColor,
  };
  return (
    <View style={styles.container}>
      <Text style={[styles.specTextStyle, textStyle3]}>
        {linkTitle}
      </Text>
      <TextInput
        placeholder={linkPlaceholder}
        placeholderTextColor={
          darkMode ? colors.OPACITYBUTTON : colors.GRAYTEXT
        }
        autoCapitalize={'none'}
        autoCorrect={false}
        maxLength={16}
        style={[styles.specInputTextStyle, textStyle2]}
        clearButtonMode="always"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 25,
  },
  specTextStyle: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: colors.BLACKTEXT,
  },
  specInputTextStyle: {
    fontSize: 14,
    color: colors.BLACKTEXT,
    fontFamily: 'Poppins-Regular',
    borderWidth: 16,
    borderRadius: 16,
    backgroundColor: colors.SHADOW,
    borderColor: colors.SHADOW,
    marginTop: 10,
    shadowOpacity: 0.1,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 5,
  },
});
