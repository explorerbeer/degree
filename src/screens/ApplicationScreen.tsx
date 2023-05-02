import React from 'react';
import {StyleSheet, View} from 'react-native';
import {RespondBlockButton} from '../components/respond/buttons/RespondBlockButton';
import {EScreens} from '../navigation/screens';
import {useNavigation} from '@react-navigation/native';
import {UserRespondsText} from '../components/respond/texts/UserRespondsText';
import {LikedSection} from '../components/liked/cards/LikedSection';
import {colors} from '../colors/colors';

export const ApplicationScreen = () => {
  const navigation = useNavigation<any>();

  const navigateToHome = () => {
    navigation.navigate(EScreens.HOME);
  };

  return (
    <View style={styles.container}>
      <RespondBlockButton resTitle={'Liked Offers'} onPress={navigateToHome} />
      <UserRespondsText uTitle={'Your Offers'} />
      <LikedSection />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACK,
  },
});
