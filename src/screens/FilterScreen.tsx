import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { colors } from '../colors/colors';
import { RespondBlockButton } from '../components/respond/buttons/RespondBlockButton';
import { useNavigation } from '@react-navigation/native';
import { EScreens } from '../navigation/screens';
import { SelectList } from 'react-native-dropdown-select-list';
import { ApplyButton } from '../components/filter/ApplyButton';
import { ThemeContext } from '../ThemeContext';

interface Profession {
  key: string;
  value: string;
}

interface FilterScreenProps {}

export const FilterScreen: React.FC<FilterScreenProps> = () => {
  const navigation = useNavigation<any>();

  const navigateToHome = () => {
    navigation.navigate(EScreens.HOME);
  };

  const [selected, setSelected] = useState<string>('');
  const [activeButton, setActiveButton] = useState<number | null>(
    null
  );

  const handleButtonPress = (buttonId: number | null) => {
    setActiveButton(buttonId);
  };

  const getButtonStyle = (buttonId: number | null) => {
    return buttonId === activeButton
      ? styles.typeButtonStyleActive
      : styles.typeButtonStyleInactive;
  };

  const getTextStyle = (buttonId: number | null) => {
    return buttonId === activeButton
      ? styles.btnTextStyleActive
      : styles.btnTextStyleInactive;
  };

  const { darkMode } = useContext(ThemeContext);
  const shadowColor = darkMode ? colors.DARKSHADOW : colors.SHADOW;
  const backColor = darkMode ? colors.DARKBACK : colors.BACK;
  const backStyle = {
    backgroundColor: backColor,
    borderColor: shadowColor,
  };
  const textColor1 = darkMode ? colors.WHITETEXT : colors.GRAYTEXT;
  const textStyle1 = { color: textColor1 };
  const textColor2 = darkMode ? colors.WHITETEXT : colors.BLACKTEXT;
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

  const profession: Profession[] = [
    { key: '1', value: 'UI/UX Designer' },
    { key: '2', value: 'Game Designer' },
    { key: '3', value: 'Narrative Designer' },
    { key: '4', value: 'Level Designer' },
    { key: '5', value: 'Technical Designer' },
    { key: '6', value: '2D Artist' },
    { key: '7', value: '2D Animator' },
    { key: '8', value: '3D Artist' },
    { key: '9', value: '3D Animator' },
    { key: '10', value: 'Unity Developer' },
    { key: '11', value: 'Unreal Engine Developer' },
  ];

  const subProfession: Profession[] = [
    { key: '1', value: 'Development' },
    { key: '2', value: 'Design' },
    { key: '3', value: 'Animation' },
  ];

  const cities: Profession[] = [
    { key: '1', value: 'Minsk' },
    { key: '2', value: 'Grodno' },
    { key: '3', value: 'Vitebsk' },
    { key: '4', value: 'Mogilev' },
    { key: '5', value: 'Gomel' },
    { key: '6', value: 'Brest' },
  ];

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.BACK,
    },
    categoryTextStyle: {
      fontSize: 18,
      fontFamily: 'Poppins-SemiBold',
      color: colors.BLACKTEXT,
      paddingTop: 65,
      paddingBottom: 15,
      marginLeft: 20,
    },
    subLocTextStyle: {
      fontSize: 18,
      fontFamily: 'Poppins-SemiBold',
      color: colors.BLACKTEXT,
      paddingTop: 15,
      paddingBottom: 15,
      marginLeft: 20,
    },
    offerTypeTextStyle: {
      fontSize: 18,
      fontFamily: 'Poppins-SemiBold',
      color: colors.BLACKTEXT,
      paddingTop: 30,
      paddingBottom: 15,
      marginLeft: 20,
    },
    dropDownBox: {
      marginHorizontal: 20,
      shadowOpacity: 0.1,
      shadowOffset: { width: 5, height: 5 },
      shadowRadius: 3,
    },
    dropDownInput: {
      fontSize: 16,
    },
    dropDownScroll: {
      marginHorizontal: 20,
    },
    dropDownScrollText: {
      fontSize: 16,
    },
    buttonsBlockStyle: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginHorizontal: 10,
    },
    typeButtonStyleActive: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.BUTTON,
      width: 110,
      height: 50,
      borderRadius: 10,
      shadowOpacity: 0.1,
      shadowOffset: { width: 5, height: 5 },
      shadowRadius: 3,
    },
    typeButtonStyleInactive: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: darkMode ? colors.DARKBACK : colors.BACK,
      borderColor: darkMode ? colors.DARKSHADOW : colors.BUTTON,
      width: 110,
      height: 50,
      borderRadius: 10,
      borderWidth: 1,
      shadowOpacity: 0.1,
      shadowOffset: { width: 5, height: 5 },
      shadowRadius: 3,
    },
    btnTextStyleActive: {
      fontSize: 16,
      fontFamily: 'Poppins-Regular',
      color: colors.WHITETEXT,
    },
    btnTextStyleInactive: {
      fontSize: 16,
      fontFamily: 'Poppins-Regular',
      color: darkMode ? colors.WHITETEXT : colors.GRAYTEXT,
    },
  });

  const inputStyles: TextStyle = StyleSheet.flatten([
    styles.dropDownInput,
    textStyle1,
  ]);

  const boxStyles: ViewStyle = StyleSheet.flatten([
    styles.dropDownBox,
    backStyle,
  ]);

  const dropdownTextStyles: TextStyle = StyleSheet.flatten([
    styles.dropDownScrollText,
    textStyle3,
  ]);

  const dropdownStyles: ViewStyle = StyleSheet.flatten([
    styles.dropDownScroll,
    backStyle,
  ]);

  return (
    <View style={[styles.container, backStyle]}>
      <RespondBlockButton
        resTitle={'Set Filters'}
        onPress={navigateToHome}
      />
      <Text style={[styles.categoryTextStyle, textStyle3]}>
        Category
      </Text>
      <SelectList
        setSelected={(val: React.SetStateAction<string>) =>
          setSelected(val)
        }
        data={profession}
        save="value"
        placeholder="Speciality"
        inputStyles={inputStyles}
        boxStyles={boxStyles}
        dropdownStyles={dropdownStyles}
        dropdownTextStyles={dropdownTextStyles}
        fontFamily="Poppins-Regular"
        search={false}
      />
      <Text style={[styles.subLocTextStyle, textStyle3]}>
        Sub Category
      </Text>
      <SelectList
        setSelected={(val: React.SetStateAction<string>) =>
          setSelected(val)
        }
        data={subProfession}
        save="value"
        placeholder="Sub Speciality"
        inputStyles={inputStyles}
        boxStyles={boxStyles}
        dropdownStyles={dropdownStyles}
        dropdownTextStyles={dropdownTextStyles}
        fontFamily="Poppins-Regular"
        search={false}
      />
      <Text style={[styles.subLocTextStyle, textStyle3]}>
        Location
      </Text>
      <SelectList
        setSelected={(val: React.SetStateAction<string>) =>
          setSelected(val)
        }
        data={cities}
        save="value"
        placeholder="Location"
        inputStyles={inputStyles}
        boxStyles={boxStyles}
        dropdownStyles={dropdownStyles}
        dropdownTextStyles={dropdownTextStyles}
        fontFamily="Poppins-Regular"
        search={false}
      />
      <Text style={[styles.offerTypeTextStyle, textStyle3]}>
        Offer Type
      </Text>
      <View style={styles.buttonsBlockStyle}>
        <TouchableOpacity
          style={getButtonStyle(1)}
          onPress={() => handleButtonPress(1)}
        >
          <Text style={getTextStyle(1)}>Teams</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={getButtonStyle(3)}
          onPress={() => handleButtonPress(3)}
        >
          <Text style={getTextStyle(3)}>Both</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={getButtonStyle(2)}
          onPress={() => handleButtonPress(2)}
        >
          <Text style={getTextStyle(2)}>Specialists</Text>
        </TouchableOpacity>
      </View>
      <ApplyButton title={'Apply'} onPress={navigateToHome} />
    </View>
  );
};
