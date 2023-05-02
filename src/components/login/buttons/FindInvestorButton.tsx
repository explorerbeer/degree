import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {StyleSheet, Text} from 'react-native';
import {colors} from '../../../colors/colors';

interface IFindInvestorButton {
  FindInvestorTitle: string;
  onPress: () => void;
}

export const FindInvestorButton = ({
  FindInvestorTitle,
  onPress,
}: IFindInvestorButton) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.fInvestorStyle}>
      <Text style={styles.font}>{FindInvestorTitle}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fInvestorStyle: {
    backgroundColor: colors.BUTTON,
    borderColor: colors.BUTTON,
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: 18,
    marginHorizontal: 25,
    marginTop: 45,
    shadowOpacity: 0.1,
    shadowOffset: {width: 5, height: 5},
    shadowRadius: 3,
  },
  font: {
    color: colors.WHITETEXT,
    fontSize: 17,
    fontFamily: 'Poppins-Regular',
  },
});
