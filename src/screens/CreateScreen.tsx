import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { EScreens } from '../navigation/screens';
import { RespondBlockButton } from '../components/respond/buttons/RespondBlockButton';
import { SpecBlock } from '../components/create/inputs/SpecBlock';
import { colors } from '../colors/colors';
import { TeamBlock } from '../components/create/inputs/TeamBlock';
import { CityBlock } from '../components/create/inputs/CityBlock';
import { DescrBlock } from '../components/create/inputs/DescrBlock';
import { LinkBlock } from '../components/create/inputs/LinkBlock';
import { ApplyButton } from '../components/create/buttons/ApplyButton';
import { ThemeContext } from '../ThemeContext';

export const CreateScreen = () => {
  const navigation = useNavigation<any>();

  const navigateToHome = () => {
    navigation.navigate(EScreens.HOME);
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
    <>
      <RespondBlockButton
        resTitle={'Create Offer'}
        onPress={navigateToHome}
      />
      <ScrollView style={[styles.container, backStyle]}>
        <SpecBlock
          specTitle={'Speciality'}
          specPlaceholder={'Speciality'}
        />
        <TeamBlock teamTitle={'Team'} teamPlaceholder={'Team'} />
        <LinkBlock linkTitle={'Link'} linkPlaceholder={'Link'} />
        <CityBlock cityTitle={'City'} cityPlaceholder={'City'} />
        <DescrBlock
          descrTitle={'Description'}
          descrPlaceholder={'Describe Your Offer'}
        />
        <ApplyButton onPress={navigateToHome} title={'Apply'} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACK,
  },
});
