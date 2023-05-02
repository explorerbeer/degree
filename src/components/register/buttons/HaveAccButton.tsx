import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from '../../../colors/colors';

interface IHaveAccButton {
  haveAccTitle: string;
  logTitle: string;
  onPress: () => void;
}

export const HaveAccButton = ({
  haveAccTitle,
  logTitle,
  onPress,
}: IHaveAccButton) => {
  return (
    <View style={styles.buttonBlockTextStyle}>
      <Text style={styles.alreadyLoginTextStyle}>{haveAccTitle}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.logInTextStyle}>{logTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonBlockTextStyle: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  alreadyLoginTextStyle: {
    fontSize: 18,
    color: colors.GRAYTEXT,
    fontFamily: 'Poppins-Regular',
  },
  logInTextStyle: {
    fontSize: 18,
    color: colors.BLACKTEXT,
    fontFamily: 'Poppins-SemiBold',
  },
});
