import {AnyAction, combineReducers, Reducer} from '@reduxjs/toolkit';
import loader from './loader';
import alert from './alert';
import auth from './auth';

const combinedReducer = combineReducers({
  loader,
  alert,
  auth,
});

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  return combinedReducer(state, action);
};

export default rootReducer;
export type RootState = ReturnType<typeof combinedReducer>;
