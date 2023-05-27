import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { EScreens } from '../navigation/screens';
import { SpecBlock } from '../components/create/inputs/SpecBlock';
import { colors } from '../colors/colors';
import { TeamBlock } from '../components/create/inputs/TeamBlock';
import { CityBlock } from '../components/create/inputs/CityBlock';
import { DescrBlock } from '../components/create/inputs/DescrBlock';
import { ApplyButton } from '../components/create/buttons/ApplyButton';
import { LinkBlock } from '../components/create/inputs/LinkBlock';
import { CreateRespond } from '../components/respond/buttons/CreateRespond';
import { ThemeContext } from '../ThemeContext';

export const CreateProjectScreen = () => {
  const navigation = useNavigation<any>();

  const navigateToProject = () => {
    navigation.navigate(EScreens.PROJECT);
  };

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
    <>
      <CreateRespond
        resTitle={'Create Project Page'}
        onPress={navigateToProject}
      />
      <ScrollView style={[styles.container, backStyle]}>
        <SpecBlock
          specTitle={'Project Name'}
          specPlaceholder={'Project Name'}
        />
        <TeamBlock teamTitle={'Genre'} teamPlaceholder={'Genre'} />
        <CityBlock
          cityTitle={'Platform'}
          cityPlaceholder={'Platform'}
        />
        <LinkBlock
          linkTitle={'Project Link'}
          linkPlaceholder={'Project Link'}
        />
        <LinkBlock
          linkTitle={'Communication Link'}
          linkPlaceholder={'Communication Link'}
        />
        <DescrBlock
          descrTitle={'Description'}
          descrPlaceholder={'Describe Your Project'}
        />
        <ApplyButton onPress={navigateToProject} title={'Apply'} />
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
