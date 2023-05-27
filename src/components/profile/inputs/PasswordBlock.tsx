import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { colors } from '../../../colors/colors';
import { TouchableOpacity } from '@gorhom/bottom-sheet';
import IconSvgEyeActive from '../../../assets/icons/register/IconSvgEyeActive';
import IconSvgEye from '../../../assets/icons/register/IconSvgEye';
import { ThemeContext } from '../../../ThemeContext';
import IconSvgEyeActiveDark from '../../../assets/icons/register/IconSvgEyeActiveDark';
import IconSvgEyeDark from '../../../assets/icons/register/IconSvgEyeDark';

interface IPasswordBlock {
  nameTitle: string;
  placeholder: string;
}

export const PasswordBlock = ({
  nameTitle,
  placeholder,
}: IPasswordBlock) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
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

  const toggleShowPassword = () => setShowPassword(!showPassword);
  return (
    <View>
      <Text style={[styles.passTextStyle, textStyle1]}>
        {nameTitle}
      </Text>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={
          darkMode ? colors.OPACITYBUTTON : colors.GRAYTEXT
        }
        autoCapitalize={'none'}
        autoCorrect={false}
        maxLength={16}
        style={[styles.passTextInputStyle, textStyle2]}
        secureTextEntry={!showPassword}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity
        onPress={toggleShowPassword}
        style={styles.blockStyle}
      >
        {darkMode ? (
          showPassword ? (
            <IconSvgEyeActiveDark />
          ) : (
            <IconSvgEyeDark />
          )
        ) : showPassword ? (
          <IconSvgEyeActive />
        ) : (
          <IconSvgEye />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  passTextStyle: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: colors.GRAYTEXT,
    marginLeft: 20,
    marginTop: 15,
  },
  passTextInputStyle: {
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
  blockStyle: {
    position: 'absolute',
    marginLeft: 320,
    paddingTop: 65,
  },
});
