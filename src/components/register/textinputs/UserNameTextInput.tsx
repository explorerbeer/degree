import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import IconSvgUser from '../../../assets/icons/register/IconSvgUser';
import { colors } from '../../../colors/colors';
import { ThemeContext } from '../../../ThemeContext';
import IconSvgUserDark from '../../../assets/icons/register/IconSvgUserDark';

interface IUserNameTextInput {
  placeholder: string;
}

export const UserNameTextInput = ({
  placeholder,
}: IUserNameTextInput) => {
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
      <View style={styles.textIconBlockStyle}>
        {darkMode ? <IconSvgUserDark /> : <IconSvgUser />}
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={
            darkMode ? colors.WHITETEXT : colors.GRAYTEXT
          }
          style={[styles.userNameTextStyle, textStyle]}
          autoCapitalize={'none'}
          clearButtonMode="always"
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
  userNameTextStyle: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 15,
    fontFamily: 'Poppins-Regular',
  },
  textIconBlockStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
