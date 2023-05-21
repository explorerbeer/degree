import {RootState} from '../reducers';

export const isAlertShownSelector = (state: RootState) => state.alert.isShown;
export const alertMessageSelector = (state: RootState) => state.alert.message;
export const alertTitleSelector = (state: RootState) => state.alert.title;
