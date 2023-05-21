import {RootState} from '../reducers';

export const isGlobalLoaderShownSelector = (state: RootState): boolean =>
  state.loader.loadingsCounter !== 0;
