import React, { useContext } from 'react';
import { Alert, StyleSheet } from 'react-native';
import { RespondBlockButton } from '../components/respond/buttons/RespondBlockButton';
import { useNavigation } from '@react-navigation/native';
import { EScreens } from '../navigation/screens';
import { NameDataBlock } from '../components/apply/input/NameDataBlock';
import { colors } from '../colors/colors';
import { SpecBlock } from '../components/create/inputs/SpecBlock';
import { LinkBlock } from '../components/apply/input/LinkBlock';
import { CityBlock } from '../components/apply/input/CityBlock';
import { ScrollView } from 'react-native-gesture-handler';
import { DescrBlock } from '../components/apply/input/DescrBlock';
import { AddCVButton } from '../components/apply/buttons/AddCVButton';
import DocumentPicker from 'react-native-document-picker';
import { ApplyButton } from '../components/create/buttons/ApplyButton';
import { ThemeContext } from '../ThemeContext';

export const ApplyScreen = () => {
  const openDocumentPicker = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
        allowMultiSelection: false,
      });
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('Error');
      } else {
        console.log('Choose file error: ', err);
      }
    }
  };

  const navigation = useNavigation<any>();

  const navigateToHome = () => {
    navigation.navigate(EScreens.HOME);
  };

  const { darkMode } = useContext(ThemeContext);
  const backColor = darkMode ? colors.DARKBACK : colors.BACK;
  const backStyle = {
    backgroundColor: backColor,
  };

  return (
    <>
      <RespondBlockButton
        resTitle={'Apply Offer'}
        onPress={navigateToHome}
      />
      <ScrollView style={[styles.container, backStyle]}>
        <NameDataBlock
          firstNameText={'First Name'}
          lastNameText={'Last Name'}
          fNamePlaceholder={'First Name'}
          lNamePlaceholder={'Last Name'}
        />
        <SpecBlock
          specTitle={'Speciality'}
          specPlaceholder={'Speciality'}
        />
        <LinkBlock linkTitle={'Links'} linkPlaceholder={'Links'} />
        <CityBlock cityTitle={'City'} cityPlaceholder={'City'} />
        <DescrBlock
          descrTitle={'Message'}
          descrPlaceholder={'Message'}
        />
        <AddCVButton
          onPress={openDocumentPicker}
          btnTitle={'Upload CV Here'}
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
