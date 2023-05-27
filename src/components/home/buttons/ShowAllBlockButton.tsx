import React, { useContext } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';
import { colors } from '../../../colors/colors';
import { ThemeContext } from '../../../ThemeContext';

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
  const { darkMode } = useContext(ThemeContext);
  const backColor = darkMode ? colors.DARKBACK : colors.BACK;
  const backStyle = { backgroundColor: backColor };
  const textColor1 = darkMode ? colors.WHITETEXT : colors.GRAYTEXT;
  const textStyle1 = { color: textColor1 };
  const textColor2 = darkMode ? colors.WHITETEXT : colors.BLACKTEXT;
  const shadowColor = darkMode ? colors.DARKSHADOW : colors.SHADOW;
  const shadowColor2 = darkMode ? colors.DARKSHADOW : colors.SHADOW;
  const statusColor = darkMode
    ? colors.DARKBACK
    : colors.OPACITYBUTTON;
  const textStyle2 = {
    color: textColor2,
    backgroundColor: shadowColor,
    borderColor: shadowColor2,
  };
  const textStyle3 = {
    color: textColor2,
  };
  const shadowStyle = {
    backgroundColor: shadowColor,
  };

  return (
    <View style={styles.showAllButtonStyle}>
      <Text style={[styles.offersTextStyle, textStyle3]}>
        {popularTitle}
      </Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={[styles.showAllTextStyle, textStyle1]}>
          {showTitle}
        </Text>
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
