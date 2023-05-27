import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import IconSvgAdd from '../../../assets/icons/home/IconSvgAdd';
import {colors} from '../../../colors/colors';

interface IAddButton {
  onPress: () => void;
}

export const AddButton = ({onPress}: IAddButton) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.btnStyle}>
        <IconSvgAdd />
        <Text style={styles.addTextStyle}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    flex: 1,
    alignItems: 'center',
    shadowOpacity: 0.1,
    shadowOffset: {width: 5, height: 5},
    shadowRadius: 3,
  },
  addTextStyle: {
    fontSize: 35,
    color: colors.WHITETEXT,
    marginTop: -45,
  },
});
