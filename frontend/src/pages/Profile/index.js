import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { signOut } from '~/store/modules/auth/actions';
import { updateProfileRequest } from '~/store/modules/user/actions';

import AvatarInput from './AvatarInput';
import { Container, Header, Body, Bottom } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  function handleOnChange() {
    const oldPasswordInput = document.querySelector('input[name="oldPassword"');
    const passwordInput = document.querySelector('input[name="password"');
    const confirmPasswordInput = document.querySelector(
      'input[name="confirmPassword"'
    );

    if (oldPasswordInput.value !== '') {
      passwordInput.disabled = false;
      confirmPasswordInput.disabled = false;
    } else {
      passwordInput.disabled = true;
      passwordInput.value = '';
      confirmPasswordInput.disabled = true;
      confirmPasswordInput.value = '';
    }
  }

  return (
    <Container>
      <h1> Perfil </h1>

      <Form initialData={profile} onSubmit={handleSubmit}>
        <Header>
          <AvatarInput name="avatar_id" />
        </Header>
        <Body>
          <div className="left">
            <Input name="shop_name" placeholder="Nome do Estabelecimento" />
            <Input maxLength={24} name="name" placeholder="Nome Completo" />
            <Input name="email" type="email" placeholder="E-mail" />

            <hr />

            <Input
              type="password"
              name="oldPassword"
              placeholder="Senha atual"
              onChange={handleOnChange}
            />
            <Input
              type="password"
              name="password"
              placeholder="Nova Senha"
              disabled={true}
            />
            <Input
              name="confirmPassword"
              type="password"
              placeholder="Confirmar Senha"
              disabled={true}
            />
          </div>
          <div className="right">
            <div className="address-number">
              <Input
                className="nb3"
                name="tel"
                placeholder="Telefone, Ex: (99) 9999-9999"
              />
              <Input
                className="nb4"
                name="cel"
                placeholder="Celular, Ex: (99) 99999-9999"
              />
            </div>
            <Input name="identifier" placeholder="CPF / CNPJ" disabled />

            <Input name="cep" placeholder="CEP" />
            <hr />
            <div className="address-number">
              <Input
                className="nb1"
                name="address"
                placeholder="Rua / Avenida"
              />
              <Input className="nb2" name="house_number" placeholder="Nº" />
            </div>

            <Input name="district" placeholder="Bairro" />
            <div className="address-number">
              <Input className="nb1" name="city" placeholder="Cidade" />
              <Input className="nb2" name="uf" placeholder="UF" maxLength="2" />
            </div>
          </div>
        </Body>

        <Bottom>
          <div>
            <button className="att" type="submit">
              Atualizar Perfil
            </button>
          </div>
          <div>
            <button className="logout" type="button" onClick={handleSignOut}>
              Sair
            </button>
          </div>
        </Bottom>
      </Form>
    </Container>
  );
}
