import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {colors} from '../../../colors/colors';

interface IMailBlock {
  nameTitle: string;
  placeholder: string;
}

export const MailBlock = ({nameTitle, placeholder}: IMailBlock) => {
  return (
    <View>
      <Text style={styles.mailTextStyle}>{nameTitle}</Text>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.GRAYTEXT}
        autoCapitalize={'none'}
        autoCorrect={false}
        maxLength={16}
        style={styles.mailTextInputStyle}
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
    shadowOffset: {width: 5, height: 5},
    shadowRadius: 5,
  },
});
