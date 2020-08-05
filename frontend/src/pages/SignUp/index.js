import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { signUpRequest } from '~/store/modules/auth/actions';
import { toast } from 'react-toastify';
import api from '~/services/api';

const schema = Yup.object().shape({
  name: Yup.string('Insira um nome válido').required('Nome é Obrigatório'),
  identifier: Yup.string().required('Campo Obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('o Email é Obrigatório'),
  password: Yup.string('Insira uma Senha Válida')
    .min(6, 'Mínimo de 6 caracteres')
    .required('Senha Obrigatória'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, identifier, email, password }) {
    async function check(identifier) {
      const res = await api.get('users');
      const data = res.data.find((item) =>
        item.identifier.localeCompare(identifier)
      );

      if (data) {
        toast.error('CPF / CNPJ Já cadastrado.');
      }
    }

    check(identifier);
    dispatch(signUpRequest(name, identifier, email, password));
  }

  return (
    <>
      <Form schema={schema} onSubmit={handleSubmit}>
        <h1> Preparado para Alavancar seu Negócio ? </h1>
        <div className="div-hr">
          <h2>
            {' '}
            Apresente seu trabalho para o mundo inteiro e receba clientes de
            todos os lugares !
          </h2>
        </div>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="identifier" placeholder="CPF / CNPJ" />
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Senha" />

        <button type="submit">Criar Conta</button>
        <Link to="/"> Já tem conta? faça Login!</Link>
      </Form>
    </>
  );
}
