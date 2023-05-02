import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {colors} from '../../../../colors/colors';

interface IHintText {
  hintTitle: string;
}

export const HintText = ({hintTitle}: IHintText) => {
  return (
    <View>
      <Text style={styles.hintTextStyle}>{hintTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  hintTextStyle: {
    color: colors.GRAYTEXT,
    fontSize: 12,
    marginLeft: 30,
    fontFamily: 'Poppins-Regular',
  },
});
