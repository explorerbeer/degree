import {createAction} from '@reduxjs/toolkit';

export const SHOW_ALERT = '@alert/SHOW_ALERT';
export const showAlert = createAction<string>(SHOW_ALERT);

export const HIDE_ALERT = '@alert/HIDE_ALERT';
export const hideAlert = createAction<undefined>(HIDE_ALERT);

export const SHOW_CONFIGURABLE_ALERT = '@alert/SHOW_CONFIGURABLE_ALERT';
export const showConfigurableAlert = createAction<{
  title: string;
  message: string;
}>(SHOW_CONFIGURABLE_ALERT);
