import React, { useContext } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../../colors/colors';
import { ThemeContext } from '../../../ThemeContext';

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
  const { darkMode } = useContext(ThemeContext);
  const textColor1 = darkMode ? colors.BUTTON : colors.BLACKTEXT;
  const textColor2 = darkMode ? colors.WHITETEXT : colors.GRAYTEXT;
  const textStyle1 = {
    color: textColor1,
  };
  const textStyle2 = {
    color: textColor2,
  };
  return (
    <View style={styles.buttonBlockTextStyle}>
      <Text style={[styles.alreadyLoginTextStyle, textStyle2]}>
        {haveAccTitle}
      </Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={[styles.logInTextStyle, textStyle1]}>
          {logTitle}
        </Text>
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
