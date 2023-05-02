import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SwitchButtonBlock} from '../assets/icons/settings/buttons/SwitchButtonBlock';
import {HintText} from '../assets/icons/settings/texts/HintText';
import {SettingsBlockButton} from '../components/settings/buttons/SettingsBlockButton';
import {EScreens} from '../navigation/screens';
import {colors} from '../colors/colors';

export const SettingsScreen = () => {
  const navigation = useNavigation<any>();

  const navigateToHomeScreen = () => {
    navigation.navigate(EScreens.HOME);
  };
  return (
    <View style={styles.container}>
      <SettingsBlockButton
        settingsTitle={'Settings'}
        onPress={navigateToHomeScreen}
      />
      <SwitchButtonBlock title={'New Offers'} />
      <HintText hintTitle={'New offer notifications'} />
      <SwitchButtonBlock title={'Got Hired'} />
      <HintText hintTitle={'You get hired any company'} />
      <SwitchButtonBlock title={'Got Rejected'} />
      <HintText hintTitle={'You get rejected by any company'} />
      <SwitchButtonBlock title={'Messages'} />
      <HintText hintTitle={'Got any new message'} />
      <SwitchButtonBlock title={'Dark Mode'} />
      <HintText hintTitle={'Enable dark theme'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACK,
  },
});
