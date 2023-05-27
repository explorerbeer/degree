import React, { useContext } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { EScreens } from '../navigation/screens';
import { PerfectMatchText } from '../components/start/texts/PerfectMatchText';
import { FindTeamText } from '../components/start/texts/FindTeamText';
import { StartButton } from '../components/start/buttons/StartButton';
import { colors } from '../colors/colors';
import { ThemeContext } from '../ThemeContext';

export const StartScreen = () => {
  const navigation = useNavigation<any>();
  const navigateToRegister = () => {
    navigation.navigate(EScreens.REGISTER);
  };
  const { darkMode } = useContext(ThemeContext);
  const backColor = darkMode ? colors.DARKBACK : colors.BACK;
  const backStyle = {
    backgroundColor: backColor,
  };

  return (
    <View style={[styles.container, backStyle]}>
      <View style={styles.image2}>
        <Image
          style={styles.image}
          source={require('/Users/matvejpodlesuk/degree/src/assets/images/TSLogo.png')}
        />
      </View>
      <PerfectMatchText
        perfMatchTitle={'Find a Perfect Team Match'}
      />
      <FindTeamText
        findTeamTitle={
          'Finding your dream team is more easier and faster with TeamSync'
        }
      />
      <StartButton
        title={"Let's get started"}
        onPress={navigateToRegister}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
    backgroundColor: colors.BACK,
  },
  image: {
    width: 250,
    height: 250,
  },
  image2: {
    width: 270,
    height: 270,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    shadowOpacity: 0.15,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 5,
  },
});
