import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

import backgroundImg from '~/assets/background.svg';

const entry = keyframes`
  from {

    opacity: 0;
  }
  to {

    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex: 1;
  background: #f1f1f1;
  flex-direction: column;
  margin-bottom: -20px;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  height: 110vh;
  flex-direction: row;
  background: #1f211f;
  text-align: center;
  width: 100%;
  max-width: 640%;

  @media (max-width: 1400px) {
    flex-direction: column;
  }

  div.wrapper-div {
    display: flex;
    flex-direction: column;
    height: 15%;
    display: none;

    h1 {
      justify-content: flex-end;
    }
  }

  form {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    animation: 1s ${entry};
    animation-fill-mode: forwards;

    div.div-hr {
      padding: 30px;
      height: 150px;
      width: 50%;
      font-size: 10px;
      color: whitesmoke;
    }

    h1 {
      color: orange;
      font-size: 35px;
    }

    input {
      border: 0;
      border-bottom: 1px solid white;
      width: 80%;
      padding: 0 15px;
      color: whitesmoke;
      font-weight: bold;
      margin: 20px;
      background-color: #1f211f;

      &::placeholder {
        color: whitesmoke;
      }

      &:focus {
        border-bottom: 1px solid orange;

        &::placeholder {
          font-size: 10px;
          color: orange;
          font-weight: bold;
        }
      }
    }

    span {
      color: orange;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      width: 80%;
      background: linear-gradient(-90deg, orange, ${darken(0.1, 'orange')});
      font-weight: bold;
      color: #333;
      border: 0;
      font-size: 16px;
      border-radius: 2px;

      &:hover {
        background: linear-gradient(-90deg, ${darken(0.1, 'orange')}, orange);
      }
    }

    a {
      color: whitesmoke;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  animation: appear 0.3s;
  overflow: hidden;
`;

export const Background = styled.div`
  display: flex;
  flex: 2;
  background: url(${backgroundImg}) no-repeat;
  background-size: cover;
`;
