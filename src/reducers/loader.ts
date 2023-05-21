import {BlurViewProps} from '@react-native-community/blur';
import {createReducer} from '@reduxjs/toolkit';
import {ColorValue} from 'react-native';
import {hideGlobalIndicator, showGlobalIndicator} from '../actions/loader';

const initialState: TLoaderState = {
  loadingsCounter: 0,
};

type TLoaderState = {
  loadingsCounter: number;
  options?: {
    backgroundColor?: ColorValue;
    blurType?: BlurViewProps['blurType'];
  };
};

export default createReducer<TLoaderState>(initialState, builder =>
  builder
    .addCase(showGlobalIndicator, (state, action) => {
      return {
        options: {...action.payload},
        loadingsCounter: state.loadingsCounter + 1,
      };
    })
    .addCase(hideGlobalIndicator, state => ({
      ...state,
      loadingsCounter: state.loadingsCounter - 1,
    })),
);
