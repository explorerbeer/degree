import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { RespondBlockButton } from '../components/respond/buttons/RespondBlockButton';
import { useNavigation } from '@react-navigation/native';
import { EScreens } from '../navigation/screens';
import { UserRespondsText } from '../components/respond/texts/UserRespondsText';
import { ResponseSection } from '../components/respond/cards/ResponseSection';
import { colors } from '../colors/colors';
import { ThemeContext } from '../ThemeContext';

export const ResponseScreen = () => {
  const navigation = useNavigation<any>();

  const navigateToHome = () => {
    navigation.navigate(EScreens.HOME);
  };
  const { darkMode } = useContext(ThemeContext);
  const backColor = darkMode ? colors.DARKBACK : colors.BACK;
  const backStyle = { backgroundColor: backColor };

  return (
    <View style={[styles.container, backStyle]}>
      <RespondBlockButton
        onPress={navigateToHome}
        resTitle={'Respond'}
      />
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
