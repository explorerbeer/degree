import {BlurViewProperties} from '@react-native-community/blur';
import {createAction} from '@reduxjs/toolkit';
import {ColorValue} from 'react-native';

type TLoaderState = {
  loadingsCounter: number;
  options?: {
    backgroundColor?: ColorValue;
    blurType?: BlurViewProperties['blurType'];
  };
};

export const SHOW_GLOBAL_INDICATOR = '@loading/SHOW_GLOBAL_INDICATOR';

export const showGlobalIndicator = createAction<TLoaderState['options']>(
  SHOW_GLOBAL_INDICATOR,
);

export const HIDE_GLOBAL_INDICATOR = '@auth/HIDE_GLOBAL_INDICATOR';

export const hideGlobalIndicator = createAction<undefined>(
  HIDE_GLOBAL_INDICATOR,
);
