import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../colors/colors';

interface IApplyButton {
  title: string;
  onPress: () => void;
}

export const ApplyButton = ({ title, onPress }: IApplyButton) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
        <Text style={styles.textStyle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    justifyContent: 'center',
    backgroundColor: colors.BUTTON,
    marginHorizontal: 15,
    marginTop: 15,
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
