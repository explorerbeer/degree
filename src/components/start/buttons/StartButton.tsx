import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../../colors/colors';

interface IStartButton {
  title: string;
  onPress: () => void;
}

export const StartButton = ({ title, onPress }: IStartButton) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.startBtn}>
      <Text style={styles.font}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  startBtn: {
    backgroundColor: colors.BUTTON,
    borderRadius: 16,
    borderWidth: 18,
    borderColor: colors.BUTTON,
    marginHorizontal: 60,
    shadowOpacity: 0.1,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 5,
    width: 260,
    height: 60,
  },
  font: {
    color: colors.WHITETEXT,
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
});
