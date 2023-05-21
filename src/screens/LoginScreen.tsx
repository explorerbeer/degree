import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useRef} from 'react';
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
import * as Yup from 'yup';
import {useAppDispatch} from '../store';
import {signInRequest} from '../actions/auth';
import {useFormik} from 'formik';
import {useSelector} from 'react-redux';
import {alertMessageSelector, isAlertShownSelector} from '../selectors';
import {hideAlert} from '../actions/alert';
import {markRequired} from '../../utils';
import {useErrorAlertDialog} from '../components/dialogs/alert';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('You should provide a valid email')
    .required('Email is required.'),
  password: Yup.string().required('Password is required.'),
});

type TLoginValues = {email: string; password: string};

const initialValues: TLoginValues = {email: '', password: ''};

export const LoginScreen = () => {
  const navigation = useNavigation<any>();
  const navigateToHome = () => {
    navigation.navigate(EScreens.DRAWER);
  };
  const navigateToRegister = () => {
    navigation.navigate(EScreens.REGISTER);
  };
  const dispatch = useAppDispatch();
  const inputRef = useRef(null);

  const onSubmit = useCallback(
    (values: TLoginValues) => {
      dispatch(
        signInRequest({
          email: values.email,
          password: values.password,
        }),
      );
    },
    [dispatch],
  );

  const formik = useFormik({
    initialValues,
    onSubmit,
    validateOnMount: true,
    validationSchema: LoginSchema,
  });

  const inputFocus = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  const isAlertShown = useSelector(isAlertShownSelector);
  const alertMessage = useSelector(alertMessageSelector);
  const errorDialog = useErrorAlertDialog();

  useEffect(() => {
    isAlertShown && errorDialog.show(alertMessage, () => dispatch(hideAlert()));
  }, [errorDialog, isAlertShown, alertMessage, dispatch]);

  return (
    <KeyboardAvoidingView
      behavior="padding"
      enabled={Platform.OS === 'ios'}
      style={styles.container}>
      <WBackText wBackTitle={'Welcome Back!'} />
      <FillDetailsText
        fDetailsTitle={'Fill your details or continue with social media'}
      />
      <EmailTextInput
        placeholder={markRequired('Email Adress')}
        onChangeText={formik.handleChange('email')}
        onBlur={formik.handleBlur('email')}
        value={formik.values.email}
        autoCapitalize={'none'}
        returnKeyType="next"
        blurOnSubmit={false}
        onSubmitEditing={inputFocus}
        keyboardType="email-address"
      />
      <PasswordTextInput
        placeholder={markRequired('Password')}
        onChangeText={formik.handleChange('password')}
        onBlur={formik.handleBlur('password')}
        value={formik.values.password}
        ref={inputRef}
        returnKeyType="done"
        onSubmitEditing={formik.handleSubmit}
      />
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
