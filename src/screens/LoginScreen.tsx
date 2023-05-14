import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';
import {FindInvestorButton} from '../components/login/buttons/FindInvestorButton';
import {FindTeamSpecButton} from '../components/login/buttons/FindTeamSpecButton';
import {WBackText} from '../components/login/texts/WBackText';
import {HaveAccButton} from '../components/register/buttons/HaveAccButton';
import {EmailTextInput} from '../components/register/textinputs/EmailTextInput';
import {PasswordTextInput} from '../components/register/textinputs/PasswordTextInput';
import {FillDetailsText} from '../components/register/texts/FillDetailsText';
import {EScreens} from '../navigation/screens';
import {colors} from '../colors/colors';

export const LoginScreen = () => {
  const navigation = useNavigation<any>();
  const navigateToHome = () => {
    navigation.navigate(EScreens.DRAWER);
  };
  const navigateToRegister = () => {
    navigation.navigate(EScreens.REGISTER);
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      enabled={Platform.OS === 'ios'}
      style={styles.container}>
      <WBackText wBackTitle={'Welcome Back!'} />
      <FillDetailsText
        fDetailsTitle={'Fill your details or continue with social media'}
      />
      <EmailTextInput placeholder={'Email Address'} />
      <PasswordTextInput placeholder={'Password'} />
      <FindTeamSpecButton
        onPress={navigateToHome}
        findTeamSpecTitle={'FIND TEAM OR SPECIALIST'}
      />
      <FindInvestorButton
        onPress={navigateToHome}
        FindInvestorTitle={'FIND INVESTOR'}
      />
      <HaveAccButton
        onPress={navigateToRegister}
        haveAccTitle={'New User? '}
        logTitle={'Create Account'}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACK,
  },
});
