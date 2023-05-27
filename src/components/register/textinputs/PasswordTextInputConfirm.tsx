import React, {
  ComponentType,
  Ref,
  useContext,
  useState,
} from 'react';
import {
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
  StyleSheet,
  View,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import IconSvgPassword from '../../../assets/icons/register/IconSvgPassword';
import { colors } from '../../../colors/colors';
import { TouchableOpacity } from '@gorhom/bottom-sheet';
import IconSvgEye from '../../../assets/icons/register/IconSvgEye';
import IconSvgEyeActive from '../../../assets/icons/register/IconSvgEyeActive';
import { ThemeContext } from '../../../ThemeContext';
import IconSvgPasswordDark from '../../../assets/icons/register/IconSvgPasswordDark';
import IconSvgEyeActiveDark from '../../../assets/icons/register/IconSvgEyeActiveDark';
import IconSvgEyeDark from '../../../assets/icons/register/IconSvgEyeDark';

interface IPasswordTextInput {
  placeholder: string;
  value: string;
  onBlur: (e: any) => void;
  returnKeyType: ReturnKeyTypeOptions;
  onSubmitEditing: () => void;
  ref: Ref<ComponentType<any>> | undefined;
  onChangeText: (e: any) => void;
}

export const PasswordTextInputConfirm = ({
  placeholder,
  onBlur,
  returnKeyType,
  onSubmitEditing,
  ref,
  onChangeText,
  value,
}: IPasswordTextInput) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);

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

  const renderEyeIcon = () => {
    if (darkMode) {
      if (showPassword) {
        return <IconSvgEyeActiveDark />;
      } else {
        return <IconSvgEyeDark />;
      }
    } else {
      if (showPassword) {
        return <IconSvgEyeActive />;
      } else {
        return <IconSvgEye />;
      }
    }
  };

  return (
    <View style={[styles.blockStyle, blockStyle]}>
      <View style={styles.passIconBlockStyle}>
        {darkMode ? <IconSvgPasswordDark /> : <IconSvgPassword />}
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={
            darkMode ? colors.OPACITYBUTTON : colors.GRAYTEXT
          }
          autoCapitalize="none"
          autoCorrect={false}
          value={value}
          secureTextEntry={!showPassword}
          style={[styles.passTextStyle, textStyle]}
          maxLength={16}
          onBlur={onBlur}
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmitEditing}
          ref={ref}
          onChangeText={onChangeText}
        />
      </View>
      <TouchableOpacity
        onPress={toggleShowPassword}
        style={styles.btnStyle}
      >
        {renderEyeIcon()}
      </TouchableOpacity>
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
  textButtonBlockStyle: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  passTextStyle: {
    flex: 1,
    fontSize: 16,
    marginLeft: 15,
    fontFamily: 'Poppins-Regular',
    color: colors.BLACKTEXT,
  },
  btnStyle: {
    position: 'absolute',
    marginTop: 3,
    marginLeft: 285,
  },
  passIconBlockStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
