import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { SwitchButtonBlock } from '../assets/icons/settings/buttons/SwitchButtonBlock';
import { HintText } from '../assets/icons/settings/texts/HintText';
import { EScreens } from '../navigation/screens';
import { colors } from '../colors/colors';
import { ThemeContext } from '../ThemeContext';
import { RespondBlockButton } from '../components/respond/buttons/RespondBlockButton';

export const SettingsScreen = () => {
  const navigation = useNavigation<any>();
  const { darkMode } = useContext(ThemeContext);

  const backColor = darkMode ? colors.DARKBACK : colors.BACK;
  const containerStyle = { backgroundColor: backColor };

  const navigateToHomeScreen = () => {
    navigation.navigate(EScreens.HOME);
  };
  return (
    <View style={[styles.container, containerStyle]}>
      <RespondBlockButton
        resTitle={'Settings'}
        onPress={navigateToHomeScreen}
      />
      <SwitchButtonBlock title={'Dark Mode'} />
      <HintText hintTitle={'Enable dark mode'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
