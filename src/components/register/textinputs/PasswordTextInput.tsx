import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import IconSvgPassword from '../../../assets/icons/register/IconSvgPassword';
import {colors} from '../../../colors/colors';
import {TouchableOpacity} from '@gorhom/bottom-sheet';
import IconSvgEye from '../../../assets/icons/register/IconSvgEye';
import IconSvgEyeActive from '../../../assets/icons/register/IconSvgEyeActive';

interface IPasswordTextInput {
  placeholder: string;
}

export const PasswordTextInput = ({placeholder}: IPasswordTextInput) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);
  return (
    <View style={styles.blockStyle}>
      <IconSvgPassword />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.GRAYTEXT}
        autoCapitalize={'none'}
        autoCorrect={false}
        value={password}
        secureTextEntry={!showPassword}
        onChangeText={setPassword}
        // enablesReturnKeyAutomatically={true}
        style={styles.passTextStyle}
        maxLength={16}
      />
      <TouchableOpacity onPress={toggleShowPassword} style={styles.btnStyle}>
        {showPassword ? <IconSvgEyeActive /> : <IconSvgEye />}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  blockStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 30,
    paddingHorizontal: 15,
    marginHorizontal: 25,
    backgroundColor: colors.SHADOW,
    borderColor: colors.SHADOW,
    borderWidth: 16,
    borderRadius: 16,
    shadowOpacity: 0.1,
    shadowOffset: {width: 5, height: 5},
    shadowRadius: 5,
  },
  textButtonBlockStyle: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  passTextStyle: {
    fontSize: 16,
    paddingLeft: 15,
    fontFamily: 'Poppins-Regular',
  },
  btnStyle: {
    position: 'absolute',
    marginLeft: 265,
  },
});
