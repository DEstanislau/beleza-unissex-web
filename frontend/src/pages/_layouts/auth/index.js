import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content, Background } from './styles';
// import logo from '~/assets/logoHeader.svg';

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <Content>
        {/* <div className="wrapper-div">
          <img src={logo} height="200px" alt="Logo Finder" />
          <h1> Beleza Unissex </h1>
        </div> */}
        <Background />
        {children}
      </Content>
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
