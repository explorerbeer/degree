import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../colors/colors';

interface IModalButton {
  title: string;
  onPress: () => void;
}

export const ModalButton = ({ title, onPress }: IModalButton) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.startBtn}>
      <Text style={styles.font}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  startBtn: {
    backgroundColor: colors.BUTTON,
    borderColor: colors.BUTTON,
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: 18,
    marginHorizontal: 20,
    marginTop: 25,
    shadowOpacity: 0.1,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 3,
    width: 350,
    height: 60,
  },
  font: {
    color: colors.WHITETEXT,
    fontSize: 17,
    fontFamily: 'Poppins-Regular',
  },
});
