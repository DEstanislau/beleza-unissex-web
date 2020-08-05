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

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Header>
          <AvatarInput name="avatar_id" />
        </Header>
        <Body>
          <div className="left">
            <Input name="name" placeholder="Nome Completo" />
            <Input name="email" type="email" placeholder="E-mail" />

            <hr />

            <Input
              type="password"
              name="oldPassword"
              placeholder="Senha atual"
            />
            <Input type="password" name="password" placeholder="Nova Senha" />
            <Input
              name="confirmPassword"
              type="password"
              placeholder="Confirmar Senha"
            />
          </div>
          <div className="right">
            <Input name="identifier" placeholder="CPF / CNPJ" />

            <hr />
            <Input name="cep" placeholder="CEP" />
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
              <Input className="nb2" name="uf" placeholder="UF" />
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
