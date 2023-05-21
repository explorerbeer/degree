import {RootState} from '../reducers';

export const isAuthSelector = (state: RootState) => state.auth.isSingedIn;
