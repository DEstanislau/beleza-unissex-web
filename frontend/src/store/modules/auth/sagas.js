import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';
import { signInSuccess, signFailure, resetSuccess } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    if (!user.provider) {
      toast.error('usuário nao é prestador de serviço');
      return;
    }

    api.defaults.headers.Authorization = `Baerer ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (err) {
    toast.error('Falha na autenticação, verifique seu email/senha');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, identifier, email, password } = payload;

    yield call(api.post, 'users', {
      name,
      identifier,
      email,
      password,
      provider: true,
    });

    toast.success('Cadastro Efetuado com Sucesso!');
    history.push('/');
  } catch (err) {
    toast.error('Falha, verifique se seus dados já estão cadastrados ');
    yield put(signFailure());
  }
}

export function* resetPasswordRequest({ payload }) {
  try {
    const { identifier, email } = payload;

    yield call(api.put, 'reset', {
      identifier,
      email,
    });

    toast.success('Tudo certo! Instruções enviadas para seu email');
    history.push('/');
  } catch (err) {
    toast.error('Falha na autenticação, verifique seu email/CPF');
  }
}

export function setToken({ payload }) {
  if (!payload) return;
  const { token } = payload.auth;
  if (token) {
    api.defaults.headers.Authorization = `Baerer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
  takeLatest('@auth/RESET_PASSWORD_REQUEST', resetPasswordRequest),
]);
