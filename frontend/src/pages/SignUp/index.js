import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { signUpRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logoHeader1.svg';

const schema = Yup.object().shape({
  name: Yup.string('Insira um nome válido').required('Nome é Obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('o Email é Obrigatório'),
  password: Yup.string('Insira uma Senha Válida')
    .min(6, 'Mínimo de 6 caracteres')
    .required('Senha Obrigatória'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} height="100" alt="Logo" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="Nome Completo" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Senha" />

        <button type="submit">Criar Conta</button>
        <Link to="/"> Já tem conta? faça Login!</Link>
      </Form>
    </>
  );
}
