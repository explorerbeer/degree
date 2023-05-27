import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet, Text } from 'react-native';
import { colors } from '../../../colors/colors';

interface IFindTeamSpecButton {
  findTeamSpecTitle: string;
  onPress: () => void;
}

export const FindTeamSpecButton = ({
  findTeamSpecTitle,
  onPress,
}: IFindTeamSpecButton) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.fTSButtonStyle}>
      <Text style={styles.font}>{findTeamSpecTitle}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fTSButtonStyle: {
    backgroundColor: colors.BUTTON,
    borderColor: colors.BUTTON,
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: 18,
    marginHorizontal: 25,
    marginTop: 40,
    shadowOpacity: 0.1,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 3,
  },
  font: {
    color: colors.WHITETEXT,
    fontSize: 17,
    fontFamily: 'Poppins-Regular',
  },
});
