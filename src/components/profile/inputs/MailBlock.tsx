import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { colors } from '../../../colors/colors';
import { ThemeContext } from '../../../ThemeContext';

interface IMailBlock {
  nameTitle: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
}

export const MailBlock = ({
  nameTitle,
  placeholder,
  onChangeText,
  value,
}: IMailBlock) => {
  const { darkMode } = useContext(ThemeContext);
  const textColor1 = darkMode ? colors.WHITETEXT : colors.GRAYTEXT;
  const textStyle1 = { color: textColor1 };
  const textColor2 = darkMode ? colors.WHITETEXT : colors.BLACKTEXT;
  const shadowColor = darkMode ? colors.DARKSHADOW : colors.SHADOW;
  const textStyle2 = {
    color: textColor2,
    backgroundColor: shadowColor,
    borderColor: shadowColor,
  };
  return (
    <View>
      <Text style={[styles.mailTextStyle, textStyle1]}>
        {nameTitle}
      </Text>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={
          darkMode ? colors.OPACITYBUTTON : colors.GRAYTEXT
        }
        autoCapitalize={'none'}
        autoCorrect={false}
        maxLength={32}
        style={[styles.mailTextInputStyle, textStyle2]}
        clearButtonMode="always"
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mailTextStyle: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: colors.GRAYTEXT,
    marginLeft: 20,
    marginTop: 10,
  },
  mailTextInputStyle: {
    fontSize: 14,
    color: colors.BLACKTEXT,
    fontFamily: 'Poppins-Regular',
    borderWidth: 16,
    borderRadius: 16,
    backgroundColor: colors.SHADOW,
    borderColor: colors.SHADOW,
    marginTop: 10,
    marginHorizontal: 25,
    shadowOpacity: 0.1,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 5,
  },
});
