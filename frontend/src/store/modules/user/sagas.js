import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { updateProfileSuccess, updateProfilefailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const {
      shop_name,
      cep,
      tel,
      cel,
      name,
      email,
      identifier,
      address,
      house_number,
      district,
      city,
      uf,
      avatar_id,
      ...rest
    } = payload.data;

    const profile = Object.assign(
      {
        shop_name,
        tel,
        cep,
        cel,
        name,
        email,
        identifier,
        address,
        house_number,
        district,
        city,
        uf,
        avatar_id,
      },
      rest.oldPassword ? rest : {}
    );

    const response = yield call(api.put, 'users', profile);

    toast.success('Perfil atualizado com sucesso!');

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    toast.error('Erro ao atualizar Perfil, Confira seus dados');
    yield put(updateProfilefailure());
  }
}

export function* createProduct({ payload }) {
  try {
    const { provider_id, name_product, price } = payload;

    yield call(api.post, 'products', {
      provider_id,
      name_product,
      price,
    });

    toast.success('Serviço Cadastrado com Sucesso!');
  } catch (err) {
    toast.error('Falha na tentativa de um novo serviço');
  }
}

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile),
  takeLatest('@user/CREATE_PRODUCT', createProduct),
]);
