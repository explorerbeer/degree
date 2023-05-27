import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LikeButton } from '../buttons/LikeButton';
import { colors } from '../../../colors/colors';
import { ThemeContext } from '../../../ThemeContext';

export interface ISpecsProps {
  spec: string;
  city: string;
}

export const Specs: React.FC<ISpecsProps> = ({ spec, city }) => {
  const likeAction = () => {
    console.log('liked');
  };

  const { darkMode } = useContext(ThemeContext);
  const backColor = darkMode ? colors.DARKBACK : colors.BACK;
  const backStyle = { backgroundColor: backColor };
  const textColor1 = darkMode
    ? colors.OPACITYBUTTON
    : colors.GRAYTEXT;
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
    <View style={[styles.flatContainerStyle, shadowStyle]}>
      <View>
        <Text style={[styles.specTextStyle, textStyle3]}>{spec}</Text>
        <Text style={[styles.cityTextStyle, textStyle1]}>{city}</Text>
      </View>
      <View style={styles.likeStyle}>
        <LikeButton onPress={likeAction} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flatContainerStyle: {
    backgroundColor: colors.SHADOW,
    width: 350,
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
    alignItems: 'center',
    borderRadius: 16,
    marginVertical: 10,
    shadowOpacity: 0.1,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 5,
  },
  specTextStyle: {
    marginLeft: 15,
    fontSize: 16,
    color: colors.BLACKTEXT,
    fontFamily: 'Poppins-Medium',
  },
  cityTextStyle: {
    marginLeft: 15,
    marginTop: 5,
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: colors.GRAYTEXT,
  },
  likeStyle: {
    paddingBottom: 10,
    paddingRight: 5,
  },
});
