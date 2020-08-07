import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { resetPassword } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  identifier: Yup.string().required('CPF / CNPJ é Obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('o Email é Obrigatório'),
});

export default function ResetPassword() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ identifier, email }) {
    dispatch(resetPassword(identifier, email));
  }

  return (
    <Form schema={schema} onSubmit={handleSubmit}>
      <h1> Recupere sua senha ! </h1>
      <div className="div-hr">
        <h2>
          {' '}
          Preencha o campo abaixo com seus dados cadastrados que enviaremos
          instruções para seu email em alguns minutos :)
        </h2>
      </div>
      <Input name="identifier" placeholder="CPF / CNPJ" />
      <Input name="email" type="email" placeholder="Email" />

      <button type="submit">
        {loading ? 'Carregando...' : 'Recuperar Senha'}
      </button>
      <Link to="/"> Voltar para Login </Link>
    </Form>
  );
}
