import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../../colors/colors';

interface IUserRespondsText {
  uTitle: string;
}

export const UserRespondsText = ({uTitle}: IUserRespondsText) => {
  return (
    <View>
      <Text style={styles.uTextStyle}>{uTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  uTextStyle: {
    fontSize: 24,
    fontFamily: 'Poppins-Medium',
    paddingTop: 40,
    paddingLeft: 30,
    color: colors.BLACKTEXT,
  },
});
