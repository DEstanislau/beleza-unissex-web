import React from 'react';

import { useSelector } from 'react-redux';
import logo from '~/assets/logoHeader.svg';
import Notifications from '~/components/Notifications';
import { Link } from 'react-router-dom';
import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector((state) => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} height="50" width="50" alt="Logo Finder" />
          <Link to="/dashboard">AGENDAMENTOS</Link>
          <Link to="/products">SERVIÇOS</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              src={
                (profile.avatar && profile.avatar.url) ||
                `https://robohash.org/${profile.id}.png`
              }
              alt="Imagem de Perfil"
            />
          </Profile>
          <Notifications />
        </aside>
      </Content>
    </Container>
  );
}
