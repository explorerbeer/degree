import React, { useContext } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colors } from '../../../colors/colors';
import { ThemeContext } from '../../../ThemeContext';

interface IDescrBlock {
  descrTitle: string;
  descrPlaceholder: string;
}

export const DescrBlock = ({
  descrTitle,
  descrPlaceholder,
}: IDescrBlock) => {
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
      <Text style={[styles.descrTextStyle, textStyle3]}>
        {descrTitle}
      </Text>
      <TextInput
        placeholder={descrPlaceholder}
        placeholderTextColor={
          darkMode ? colors.OPACITYBUTTON : colors.GRAYTEXT
        }
        autoCapitalize={'none'}
        autoCorrect={false}
        maxLength={200}
        style={[styles.descrInputTextStyle, textStyle2]}
        multiline={true}
        textAlignVertical="top"
        clearButtonMode="always"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  descrTextStyle: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: colors.BLACKTEXT,
  },
  descrInputTextStyle: {
    width: 350,
    height: 150,
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
