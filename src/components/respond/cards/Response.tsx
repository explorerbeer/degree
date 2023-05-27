import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../colors/colors';
import { ThemeContext } from '../../../ThemeContext';
// import IconSvgX from '../../../assets/icons/general/IconSvgX';
// import {TouchableOpacity} from 'react-native-gesture-handler';

interface IApplicationsProps {
  teamTitle: string;
  specs: string;
  city: string;
}

export const Response = ({
  teamTitle,
  specs,
  city,
}: IApplicationsProps) => {
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
  const statusStyle = {
    backgroundColor: statusColor,
  };

  return (
    <View style={[styles.flatListStyle, shadowStyle]}>
      <View style={styles.teamViewStyle}>
        <Text style={[styles.teamTextStyle, textStyle1]}>
          {teamTitle}
        </Text>
      </View>
      <View style={styles.specViewStyle}>
        <Text style={[styles.specTextStyle, textStyle3]}>
          {specs}
        </Text>
      </View>
      <View style={styles.cityViewStyle}>
        <Text style={[styles.cityTextStyle, textStyle1]}>{city}</Text>
      </View>
      <View style={[styles.checkStatusViewStyle, statusStyle]}>
        <Text style={styles.checkStatusFontStyle}>Delivered</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flatListStyle: {
    backgroundColor: colors.SHADOW,
    marginBottom: 20,
    marginHorizontal: 10,
    borderRadius: 16,
    height: 155,
    width: 350,
    shadowOpacity: 0.1,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 5,
  },
  teamViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 35,
    paddingTop: 25,
  },
  teamTextStyle: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: colors.GRAYTEXT,
  },
  specViewStyle: {
    paddingLeft: 35,
  },
  specTextStyle: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: colors.BLACKTEXT,
  },
  cityViewStyle: {
    paddingLeft: 35,
  },
  cityTextStyle: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: colors.GRAYTEXT,
  },
  checkStatusViewStyle: {
    marginLeft: 30,
    marginTop: 10,
    backgroundColor: colors.OPACITYBUTTON,
    width: 290,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  checkStatusFontStyle: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: colors.BUTTON,
  },
  btnStyle: {
    paddingRight: 25,
  },
});
