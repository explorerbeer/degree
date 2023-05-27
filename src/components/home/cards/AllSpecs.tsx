import React, { useContext } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { LikeButton } from '../buttons/LikeButton';
import { colors } from '../../../colors/colors';
import { useNavigation } from '@react-navigation/native';
import { EScreens } from '../../../navigation/screens';
import { ApplyButton } from '../../specs/buttons/ApplyButton';
import { ThemeContext } from '../../../ThemeContext';

export interface IAllSpecsProps {
  profession: string;
  nickName: string;
  city: string;
  specLink: string;
  descr: string;
}

export const AllSpecs: React.FC<IAllSpecsProps> = ({
  profession,
  nickName,
  city,
  specLink,
  descr,
}) => {
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

  const navigation = useNavigation<any>();

  const navigateToHome = () => {
    navigation.navigate(EScreens.HOME);
  };

  const likeAction = () => {
    console.log('liked');
  };

  const makeOffer = () => {
    Alert.alert('Sent successfully');
  };

  return (
    <View>
      <View style={[styles.flatContainerStyle, shadowStyle]}>
        <View>
          <Text style={[styles.specTextStyle, textStyle3]}>
            {profession}
          </Text>
          <Text style={[styles.usernameTextStyle, textStyle1]}>
            {nickName}
          </Text>
          <Text style={[styles.cityTextStyle, textStyle1]}>
            {city}
          </Text>
          <ApplyButton title={'Make Offer'} onPress={makeOffer} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flatContainerStyle: {
    backgroundColor: colors.SHADOW,
    width: 350,
    height: 120,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    alignItems: 'center',
    borderRadius: 16,
    marginVertical: 10,
    shadowOpacity: 0.1,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 5,
  },
  specTextStyle: {
    marginTop: 10,
    marginLeft: 15,
    fontSize: 16,
    color: colors.BLACKTEXT,
    fontFamily: 'Poppins-Medium',
  },
  cityTextStyle: {
    marginLeft: 15,
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: colors.GRAYTEXT,
  },
  usernameTextStyle: {
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
  btnStyle: {
    flexDirection: 'column',
  },
});
