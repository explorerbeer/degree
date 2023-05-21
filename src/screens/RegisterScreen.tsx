import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useRef} from 'react';
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
import * as Yup from 'yup';
import passwordValidator from 'zxcvbn';
import {FormikErrors, FormikValues, useFormik} from 'formik';
import {useAppDispatch} from '../store';
import {signUpRequest} from '../actions/auth';
import {useSelector} from 'react-redux';
import {
  alertMessageSelector,
  alertTitleSelector,
  isAlertShownSelector,
} from '../selectors';
import {hideAlert} from '../actions/alert';
import {useErrorAlertDialog, useInfoAlert} from '../components/dialogs/alert';
import {markRequired} from '../../utils';

const validationSchema = Yup.object().shape({
  userName: Yup.string().required('Name is required.'),
  email: Yup.string().email('Email is invalid.').required('Email is required.'),
  password: Yup.string()
    .min(7, 'Should be more than 7 characters.')
    .max(50, 'Should be less than 50 characters.')
    .required('Password is required.')
    .test((val, context) => {
      const res = passwordValidator(val ?? '');
      if (res.feedback.warning) {
        return context.createError({message: res.feedback.warning});
      }
      return true;
    }),
  confirm: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords do not match.')
    .required('Confirm is required.'),
});

export type TSignUpValues = {
  userName: string;
  email: string;
  password: string;
  confirm: string;
};

const initialValues: TSignUpValues = {
  userName: '',
  email: '',
  password: '',
  confirm: '',
};

function getErrorsForFields<T extends FormikValues>(
  errors: FormikErrors<T>,
  fields: (keyof FormikErrors<T>)[],
): FormikErrors<Partial<T>> {
  let reducedErrors = {};

  Object.keys(errors).forEach(key => {
    if (fields.includes(key)) {
      reducedErrors = {...reducedErrors, [key]: errors[key]};
    }
  });

  return reducedErrors;
}

export const RegisterScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();
  const navigateToLogin = () => {
    navigation.navigate(EScreens.LOGIN);
  };

  const handleSubmit = useCallback(
    (values: TSignUpValues) => {
      console.log(values);
      dispatch(signUpRequest(values.email, values.password));
    },
    [dispatch],
  );

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnMount: true,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: handleSubmit,
  });

  const isAlertShown = useSelector(isAlertShownSelector);
  const alertMessage = useSelector(alertMessageSelector);
  const alertTitle = useSelector(alertTitleSelector);

  const infoDialog = useInfoAlert('User created', alertMessage ?? '', () => {
    dispatch(hideAlert());
    navigation.navigate('LOGIN');
  });
  const errorDialog = useErrorAlertDialog();
  const inputRef = useRef(null);
  const confirmRef = useRef(null);

  useEffect(() => {
    if (isAlertShown && alertTitle) {
      infoDialog.show();
    } else if (isAlertShown) {
      errorDialog.show(alertMessage ?? '', () => dispatch(hideAlert()));
    }
  }, [
    errorDialog,
    isAlertShown,
    alertMessage,
    dispatch,
    alertTitle,
    infoDialog,
  ]);
  const inputFocus = useCallback(() => {
    inputRef.current?.focus();
  }, []);

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
      <EmailTextInput
        placeholder={markRequired('Email Adress')}
        onChangeText={formik.handleChange('email')}
        onBlur={formik.handleBlur('email')}
        value={formik.values.email}
        returnKeyType="next"
        blurOnSubmit={false}
        onSubmitEditing={inputFocus}
        keyboardType="email-address"
      />
      <PasswordTextInput
        placeholder={markRequired('Password')}
        onChangeText={formik.handleChange('confirm')}
        onBlur={formik.handleBlur('confirm')}
        value={formik.values.confirm}
        returnKeyType="next"
        ref={inputRef}
        onSubmitEditing={inputFocus}
      />
      <PasswordTextInput
        placeholder={markRequired('Confirm password')}
        onChangeText={formik.handleChange('confirm')}
        onBlur={formik.handleBlur('confirm')}
        value={formik.values.confirm}
        ref={confirmRef}
        returnKeyType="done"
        onSubmitEditing={formik.handleSubmit}
      />
      <LogRegButton onPress={formik.handleSubmit} title={'SIGN UP'} />
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
