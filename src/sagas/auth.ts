import {call, put, takeEvery} from 'redux-saga/effects';
import {
  SIGN_IN_REQUEST,
  signInFailure,
  signInRequest,
  signInSuccess,
  SignInResponse,
  SIGN_UP_REQUEST,
  signUpRequest,
  signUpSuccess,
} from '../actions/auth';
import {hideGlobalIndicator, showGlobalIndicator} from '../actions/loader';
import {showAlert} from '../actions/alert';

type TAwait<T> = T extends PromiseLike<infer U> ? U : T;
export const HttpHeaders = {
  accept: 'application/json',
  'Content-Type': 'application/json',
};

function* signInSaga(action: ReturnType<typeof signInRequest>) {
  yield put(showGlobalIndicator());

  const requestOptions = {
    method: 'POST',
    body: JSON.stringify({
      email: action.payload.email,
      password: action.payload.password,
    }),
    headers: {
      ...HttpHeaders,
    },
  };

  try {
    const response = (yield call(
      fetch,
      'http://localhost:3000/login',
      requestOptions,
    )) as TAwait<ReturnType<typeof fetch>>;

    if (response.ok) {
      const json = (yield call(response.json.bind(response))) as SignInResponse;
      yield put(signInSuccess(json));
      return;
    }
    switch (response.status) {
      case 400:
        throw new Error('Login error. Please check you credentials.');
      case 401:
        throw new Error(
          'Login error. You could have passed invalid credentials.',
        );
      case 404:
        throw new Error('Login error. User not found');
      default:
        throw new Error('Internal error');
    }
  } catch (e) {
    yield put(signInFailure());
    yield put(showAlert((e as Error).message));
  } finally {
    yield put(hideGlobalIndicator());
  }
}

function* signUpSaga({payload}: ReturnType<typeof signUpRequest>) {
  yield put(showGlobalIndicator());
  const requestOptions: RequestInit = {
    method: 'POST',
    body: JSON.stringify({
      email: payload.email,
      password: payload.password,
    }),
    headers: {
      ...HttpHeaders,
    },
  };

  try {
    const response = (yield call(
      fetch,
      'http://localhost:3000/register',
      requestOptions,
    )) as TAwait<ReturnType<typeof fetch>>;

    if (response.ok) {
      const resGet = (yield call(response.json.bind(response))) as {
        accessToken: string;
      };
      yield put(signUpSuccess({id: payload.id, userToken: resGet.accessToken}));
      return;
    }
    switch (response.status) {
      case 400:
        throw new Error('Login error. Please check you credentials.');
      case 401:
        throw new Error(
          'Login error. You could have passed invalid credentials.',
        );
      case 404:
        throw new Error('Login error. User not found');
      default:
        throw new Error('Internal error');
    }
  } catch (e) {
    yield put(signInFailure());
    yield put(showAlert((e as Error).message));
  } finally {
    yield put(hideGlobalIndicator());
  }
}

export default function* authSaga(): Generator<any> {
  yield takeEvery(SIGN_IN_REQUEST, signInSaga);
  yield takeEvery(SIGN_UP_REQUEST, signUpSaga);
}
