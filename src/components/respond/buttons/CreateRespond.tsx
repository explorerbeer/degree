import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import IconSvgGoBack from '../../../assets/icons/general/IconSvgGoBack';
import { colors } from '../../../colors/colors';
import { ThemeContext } from '../../../ThemeContext';
import IconSvgGoBackDark from '../../../assets/icons/general/IconSvgGoBackDark';

interface ICreateRespond {
  resTitle: string;
  onPress: () => void;
}

export const CreateRespond = ({
  resTitle,
  onPress,
}: ICreateRespond) => {
  const { darkMode } = useContext(ThemeContext);
  const textColor = darkMode ? colors.WHITETEXT : colors.BLACKTEXT;
  const backColor = darkMode ? colors.DARKSHADOW : colors.SHADOW;
  const textStyle = {
    color: textColor,
  };
  const backStyle = {
    backgroundColor: backColor,
  };

  return (
    <View style={[styles.blockStyle, backStyle]}>
      <TouchableOpacity onPress={onPress} style={styles.btnStyle}>
        {darkMode ? <IconSvgGoBackDark /> : <IconSvgGoBack />}
      </TouchableOpacity>
      <Text style={[styles.textStyle, textStyle]}>{resTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  blockStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 60,
    paddingBottom: 20,
  },
  btnStyle: {
    paddingLeft: 30,
  },
  textStyle: {
    marginRight: 100,
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: colors.BLACKTEXT,
  },
});
