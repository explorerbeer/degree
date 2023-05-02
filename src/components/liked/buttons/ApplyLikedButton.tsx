import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {StyleSheet, Text} from 'react-native';
import {colors} from '../../../colors/colors';

interface IApplyLikedButton {
  onPress: () => void;
  title: string;
}

export const ApplyLikedButton = ({title, onPress}: IApplyLikedButton) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    justifyContent: 'center',
    backgroundColor: colors.BUTTON,
    marginHorizontal: 35,
    marginTop: 10,
    height: 25,
    borderRadius: 16,
  },
  textStyle: {
    fontFamily: 'Poppins-Regular',
    color: colors.WHITETEXT,
    textAlign: 'center',
    fontSize: 14,
  },
});
