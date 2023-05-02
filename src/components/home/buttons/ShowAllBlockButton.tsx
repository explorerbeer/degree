import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {colors} from '../../../colors/colors';

interface IShowAllBlockButton {
  popularTitle: string;
  showTitle: string;
  onPress: () => void;
}

export const ShowAllBlockButton = ({
  popularTitle,
  onPress,
  showTitle,
}: IShowAllBlockButton) => {
  return (
    <View style={styles.showAllButtonStyle}>
      <Text style={styles.offersTextStyle}>{popularTitle}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.showAllTextStyle}>{showTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  showAllButtonStyle: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingTop: 30,
  },
  offersTextStyle: {
    paddingLeft: 20,
    fontSize: 20,
    color: colors.BLACKTEXT,
    fontFamily: 'Poppins-Medium',
  },
  showAllTextStyle: {
    marginRight: 20,
    marginBottom: 2,
    fontSize: 12,
    color: colors.GRAYTEXT,
    fontFamily: 'Poppins-Regular',
  },
});
