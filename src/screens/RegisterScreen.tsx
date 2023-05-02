import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';
import {HaveAccButton} from '../components/register/buttons/HaveAccButton';
import {LogRegButton} from '../components/register/buttons/LogRegButton';
import {EmailTextInput} from '../components/register/textinputs/EmailTextInput';
import {PasswordTextInput} from '../components/register/textinputs/PasswordTextInput';
import {UserNameTextInput} from '../components/register/textinputs/UserNameTextInput';
import {FillDetailsText} from '../components/register/texts/FillDetailsText';
import {RegAccText} from '../components/register/texts/RegAccText';
import {EScreens} from '../navigation/screens';
import {colors} from '../colors/colors';

export const RegisterScreen = () => {
  const navigation = useNavigation<any>();
  const navigateToLogin = () => {
    navigation.navigate(EScreens.LOGIN);
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      enabled={Platform.OS === 'ios'}
      style={styles.container}>
      <RegAccText regTitle={'Register Account'} />
      <FillDetailsText
        fDetailsTitle={'Fill your details or continue with social media'}
      />
      <UserNameTextInput placeholder={'User Name'} />
      <EmailTextInput placeholder={'Email Address'} />
      <PasswordTextInput placeholder={'Password'} />
      <LogRegButton onPress={navigateToLogin} title={'SIGN UP'} />
      <HaveAccButton
        onPress={navigateToLogin}
        haveAccTitle={'Already have account? '}
        logTitle={'Log In'}
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
