import {createReducer} from '@reduxjs/toolkit';
import {hideAlert, showAlert, showConfigurableAlert} from '../actions/alert';

type TAlertState = {
  isShown: boolean;
  message?: string;
  title?: string;
};

const initialState: TAlertState = {
  isShown: false,
};

const portfolioReducer = createReducer<TAlertState>(initialState, builder =>
  builder
    .addCase(showAlert, (state, action) => ({
      ...state,
      isShown: true,
      message: action.payload,
    }))
    .addCase(hideAlert, () => ({isShown: false}))
    .addCase(showConfigurableAlert, (state, {payload}) => ({
      ...state,
      isShown: true,
      message: payload.message,
      title: payload.title,
    })),
);

export default portfolioReducer;
