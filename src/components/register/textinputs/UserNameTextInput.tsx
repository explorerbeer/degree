import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import IconSvgUser from '../../../assets/icons/register/IconSvgUser';
import {colors} from '../../../colors/colors';

interface IUserNameTextInput {
  placeholder: string;
}

export const UserNameTextInput = ({placeholder}: IUserNameTextInput) => {
  return (
    <View style={styles.blockStyle}>
      <IconSvgUser />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.GRAYTEXT}
        style={styles.userNameTextStyle}
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
  userNameTextStyle: {
    fontSize: 16,
    paddingLeft: 15,
    fontFamily: 'Poppins-Regular',
  },
});
