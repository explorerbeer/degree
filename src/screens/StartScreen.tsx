import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {EScreens} from '../navigation/screens';
import {PerfectMatchText} from '../components/start/texts/PerfectMatchText';
import {FindTeamText} from '../components/start/texts/FindTeamText';
import {StartButton} from '../components/start/buttons/StartButton';
import {colors} from '../colors/colors';

export const StartScreen = () => {
  const navigation = useNavigation<any>();
  const navigateToRegister = () => {
    navigation.navigate(EScreens.REGISTER);
  };
  return (
    <View style={styles.container}>
      <PerfectMatchText perfMatchTitle={'Find a Perfect Team Match'} />
      <FindTeamText
        findTeamTitle={
          'Finding your dream team is more easier and faster with TeamHub'
        }
      />
      <StartButton title={"Let's get started"} onPress={navigateToRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 320,
    backgroundColor: colors.BACK,
  },
});
