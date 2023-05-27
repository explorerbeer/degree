import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../colors/colors';
import IconCV from '../../../assets/icons/apply/IconCV';
import { ThemeContext } from '../../../ThemeContext';
import IconCVDark from '../../../assets/icons/apply/IconCVDark';

interface IAddCVButton {
  onPress: () => void;
  btnTitle: string;
}

export const AddCVButton = ({ onPress, btnTitle }: IAddCVButton) => {
  const { darkMode } = useContext(ThemeContext);
  const textColor = darkMode ? colors.WHITETEXT : colors.BLACKTEXT;
  const textBtnColor = darkMode ? colors.WHITETEXT : colors.GRAYTEXT;
  const shadowColor = darkMode ? colors.DARKSHADOW : colors.SHADOW;
  const shadowStyle = {
    backgroundColor: shadowColor,
  };
  const shadowStyleBorder = {
    borderColor: shadowColor,
  };
  const textStyle = {
    color: textColor,
  };
  const textBtnStyle = {
    color: textBtnColor,
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.startBtn, shadowStyle, shadowStyleBorder]}
    >
      <View style={styles.infoBlockStyle}>
        {darkMode ? <IconCVDark /> : <IconCV />}
        <Text style={[styles.font, textBtnStyle]}>{btnTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  startBtn: {
    backgroundColor: colors.SHADOW,
    borderColor: colors.SHADOW,
    alignItems: 'center',
    width: 350,
    borderRadius: 16,
    borderWidth: 18,
    marginHorizontal: 20,
    marginTop: 30,
    shadowOpacity: 0.1,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 3,
  },
  font: {
    color: colors.GRAYTEXT,
    fontSize: 16,
    paddingLeft: 10,
    fontFamily: 'Poppins-Regular',
  },
  infoBlockStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
