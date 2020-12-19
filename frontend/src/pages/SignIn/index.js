import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('o Email é Obrigatório'),
  password: Yup.string('Insira uma Senha Válida').required('Senha Obrigatória'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <Form schema={schema} onSubmit={handleSubmit}>
        <h1> Faça seu Login! </h1>
        <div className="div-hr">
          <h2>
            {' '}
            Caso tenha esquecido sua senha, fique a vontade para recuperá-la
            clicando{' '}
            <Link to="/reset" style={{ color: 'orange' }}>
              {' '}
              aqui{' '}
            </Link>{' '}
          </h2>
        </div>
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Senha" />

        <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
        <Link to="/register"> Ainda não tem conta? Crie aqui!</Link>
      </Form>
    </>
  );
}
