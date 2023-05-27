import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ApplyButton } from '../buttons/ApplyButton';
import { useNavigation } from '@react-navigation/native';
import { EScreens } from '../../../navigation/screens';
import { LikeButton } from '../buttons/LikeButton';
import { colors } from '../../../colors/colors';
import { ThemeContext } from '../../../ThemeContext';

export interface IAllTeamsProps {
  teamTitle: string;
  profession: string;
  city: string;
}

export const AllTeams: React.FC<IAllTeamsProps> = ({
  teamTitle,
  profession,
  city,
}) => {
  const navigation = useNavigation<any>();
  const navigateToApplications = () => {
    navigation.navigate(EScreens.HOME);
  };
  const logLike = () => {
    console.log('Liked');
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
      <View style={styles.viewBlockStyle}>
        <Text style={[styles.profTextStyle, textStyle3]}>
          {profession}
        </Text>
        <LikeButton onPress={logLike} />
      </View>
      <Text style={[styles.cityTextStyle, textStyle1]}>{city}</Text>
      <Text style={[styles.teamTextStyle, textStyle1]}>
        {teamTitle}
      </Text>
      <ApplyButton
        onPress={navigateToApplications}
        title={'Respond'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatContainerStyle: {
    backgroundColor: colors.SHADOW,
    marginBottom: 15,
    borderRadius: 16,
    elevation: 10,
    height: 155,
    width: 350,
    shadowOpacity: 0.1,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 5,
  },
  viewBlockStyle: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  profTextStyle: {
    paddingTop: 15,
    paddingLeft: 15,
    color: colors.BLACKTEXT,
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  },
  cityTextStyle: {
    paddingTop: 15,
    paddingLeft: 15,
    color: colors.GRAYTEXT,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
  teamTextStyle: {
    paddingTop: 2,
    paddingLeft: 15,
    color: colors.GRAYTEXT,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
});
