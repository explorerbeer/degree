import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../colors/colors';
import { ApplyLikedButton } from '../buttons/ApplyLikedButton';
import { LikeButton } from '../buttons/LikeButton';
import { ThemeContext } from '../../../ThemeContext';
import { EScreens } from '../../../navigation/screens';
import { useNavigation } from '@react-navigation/native';

interface ILikedProps {
  teamTitle: string;
  specs: string;
  city: string;
}

export const Liked = ({ teamTitle, specs, city }: ILikedProps) => {
  const navigation = useNavigation<any>();
  const navigateToRespond = () => {
    navigation.navigate(EScreens.APPLY);
  };

  const likeLog = () => {
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
    <View style={[styles.flatListStyle, shadowStyle]}>
      <View style={styles.teamBlockStyle}>
        <Text style={[styles.teamTextStyle, textStyle1]}>
          {teamTitle}
        </Text>
        <View style={styles.LikeButtonStyle}>
          <LikeButton onPress={likeLog} />
        </View>
      </View>
      <Text style={[styles.specTextStyle, textStyle3]}>{specs}</Text>
      <Text style={[styles.cityTextStyle, textStyle1]}>{city}</Text>
      <ApplyLikedButton
        onPress={navigateToRespond}
        title={'Respond'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatListStyle: {
    backgroundColor: colors.SHADOW,
    marginBottom: 15,
    marginHorizontal: 10,
    borderRadius: 16,
    height: 155,
    width: 350,
    shadowOpacity: 0.1,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 5,
  },
  teamTextStyle: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: colors.GRAYTEXT,
    marginTop: 10,
    marginLeft: 35,
    marginBottom: 15,
  },
  teamBlockStyle: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  LikeButtonStyle: {
    marginRight: 15,
  },
  specTextStyle: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    marginLeft: 35,
    color: colors.BLACKTEXT,
  },
  cityTextStyle: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: colors.GRAYTEXT,
    marginLeft: 35,
  },
  specCityBlockStyle: {
    marginTop: 10,
  },
});
