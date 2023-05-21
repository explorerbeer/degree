import {createReducer} from '@reduxjs/toolkit';
import {
  logOut,
  signInRequest,
  signInSuccess,
  signUpSuccess,
} from '../actions/auth';

type TAuthState = {
  isSingedIn: boolean;
  accessToken: string | null;
};

const initialState: TAuthState = {
  isSingedIn: false,
  accessToken: '',
};

const authReducer = createReducer<TAuthState>(
  initialState,
  builder =>
    builder
      .addCase(signInRequest, state => ({...state}))
      .addCase(signInSuccess, (state, action) => ({
        ...state,
        isSingedIn: true,
        accessToken: action.payload.accessToken,
      }))
      .addCase(signUpSuccess, (state, action) => ({
        ...state,
        isSingedIn: true,
        accessToken: action.payload.userToken,
        id: action.payload.id,
      }))
      .addCase(logOut, state => ({
        ...state,
        isSingedIn: false,
        accessToken: null,
      })),
  //.addCase(logOut, () => ({ isSingedIn: false }))
);

export default authReducer;
