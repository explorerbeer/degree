import {createAction} from '@reduxjs/toolkit';
import {createCustomAction} from 'typesafe-actions';
const {v4: uuidv4} = require('uuid');
import 'react-native-get-random-values';

const id = uuidv4();

export interface SignInData {
  email: any;
  password: string;
}

export interface SignInResponse {
  accessToken: string;
}

export interface SignUpResponse {
  id: any;
  userToken: string;
}

export const SIGN_IN_REQUEST = '@auth/SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = '@auth/SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = '@auth/SIGN_IN_FAILURE';

export const signInRequest = createAction<SignInData>(SIGN_IN_REQUEST);
export const signInSuccess = createAction<SignInResponse>(SIGN_IN_SUCCESS);
export const signInFailure = createAction<undefined>(SIGN_IN_FAILURE);

export const SIGN_UP_REQUEST = '@auth/SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = '@auth/SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = '@auth/SIGN_UP_FAILURE';

export const signUpRequest = createCustomAction(
  SIGN_UP_REQUEST,
  (email: string, password: string) => ({
    payload: {id: id, email, password},
  }),
);
export const signUpSuccess = createAction<SignUpResponse>(SIGN_UP_SUCCESS);
export const signUpFailure = createAction<undefined>(SIGN_UP_FAILURE);

export const LOG_OUT = 'LOG_OUT';

export const logOut = createAction<undefined>(LOG_OUT);
