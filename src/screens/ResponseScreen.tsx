import React from 'react';
import {StyleSheet, View} from 'react-native';
import {RespondBlockButton} from '../components/respond/buttons/RespondBlockButton';
import {useNavigation} from '@react-navigation/native';
import {EScreens} from '../navigation/screens';
import {UserRespondsText} from '../components/respond/texts/UserRespondsText';
import {ResponseSection} from '../components/respond/cards/ResponseSection';
import {colors} from '../colors/colors';

export const ResponseScreen = () => {
  const navigation = useNavigation<any>();

  const navigateToHome = () => {
    navigation.navigate(EScreens.HOME);
  };
  return (
    <View style={styles.container}>
      <RespondBlockButton onPress={navigateToHome} resTitle={'Respond'} />
      <UserRespondsText uTitle={'Your Applications'} />
      <ResponseSection />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACK,
  },
});
