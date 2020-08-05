import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content, Background } from './styles';

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <Content>
        <Background />
        {children}
      </Content>
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
