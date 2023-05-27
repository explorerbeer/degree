import React, { useContext } from 'react';
import {
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
  StyleSheet,
  View,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import IconSvgEmail from '../../../assets/icons/register/IconSvgEmail';
import { colors } from '../../../colors/colors';
import { ThemeContext } from '../../../ThemeContext';
import IconSvgEmailDark from '../../../assets/icons/register/IconSvgEmailDark';

interface IEmailTextInput {
  onChangeText: (text: string) => void;
  value: string;
  placeholder: string;
  onBlur: (e: any) => void;
  returnKeyType: ReturnKeyTypeOptions;
  blurOnSubmit: boolean;
  onSubmitEditing: () => void;
  keyboardType: KeyboardTypeOptions;
}

export const EmailTextInput = ({
  placeholder,
  onChangeText,
  value,
  onBlur,
  returnKeyType,
  blurOnSubmit,
  onSubmitEditing,
  keyboardType,
}: IEmailTextInput) => {
  const { darkMode } = useContext(ThemeContext);
  const textColor = darkMode ? colors.WHITETEXT : colors.GRAYTEXT;
  const textColorInput = darkMode
    ? colors.WHITETEXT
    : colors.BLACKTEXT;
  const shadowColor = darkMode ? colors.DARKSHADOW : colors.SHADOW;
  const shadowColorBorder = darkMode
    ? colors.DARKSHADOW
    : colors.SHADOW;
  const textStyle = {
    color: textColorInput,
  };
  const blockStyle = {
    borderColor: shadowColorBorder,
    backgroundColor: shadowColor,
  };

  return (
    <View style={[styles.blockStyle, blockStyle]}>
      <View style={styles.emailIconBlockStyle}>
        {darkMode ? <IconSvgEmailDark /> : <IconSvgEmail />}
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={
            darkMode ? colors.WHITETEXT : colors.GRAYTEXT
          }
          style={[styles.emailTextStyle, textStyle]}
          autoCapitalize={'none'}
          autoCorrect={false}
          clearButtonMode="always"
          onChangeText={onChangeText}
          value={value}
          onBlur={onBlur}
          returnKeyType={returnKeyType}
          blurOnSubmit={blurOnSubmit}
          onSubmitEditing={onSubmitEditing}
          keyboardType={keyboardType}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  blockStyle: {
    marginTop: 30,
    marginHorizontal: 25,
    backgroundColor: colors.SHADOW,
    borderColor: colors.SHADOW,
    borderWidth: 16,
    borderRadius: 16,
    shadowOpacity: 0.1,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 5,
  },
  emailTextStyle: {
    flex: 1,
    fontSize: 16,
    marginLeft: 15,
    fontFamily: 'Poppins-Regular',
    color: colors.BLACKTEXT,
  },
  emailIconBlockStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
