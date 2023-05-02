import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import IconSvgEmail from '../../../assets/icons/register/IconSvgEmail';
import {colors} from '../../../colors/colors';

interface IEmailTextInput {
  placeholder: string;
}

export const EmailTextInput = ({placeholder}: IEmailTextInput) => {
  return (
    <View style={styles.blockStyle}>
      <IconSvgEmail />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.GRAYTEXT}
        style={styles.emailTextStyle}
        inlineImagePadding={20}
        autoCapitalize={'none'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  blockStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    paddingLeft: 15,
    marginHorizontal: 25,
    backgroundColor: colors.SHADOW,
    borderColor: colors.SHADOW,
    borderWidth: 16,
    borderRadius: 16,
    shadowOpacity: 0.1,
    shadowOffset: {width: 5, height: 5},
    shadowRadius: 5,
  },
  emailTextStyle: {
    fontSize: 16,
    paddingLeft: 15,
    fontFamily: 'Poppins-Regular',
  },
});
