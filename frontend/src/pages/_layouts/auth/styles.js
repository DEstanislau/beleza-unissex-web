import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

import backgroundImg from '~/assets/background.jpg';

const exit = keyframes`
  from {

    transform: translateY(-450px);
  }
  to {

    transform: translateY(0);
  }
`;

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex: 1;
  background: #f1f1f1;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  background: white;
  text-align: center;
  width: 100%;
  max-width: 640%;

  form {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    animation: 1s ${exit};
    animation-fill-mode: forwards;

    div.div-hr {
      padding: 30px;
      height: 150px;
      width: 50%;
      font-size: 10px;
      color: rgb(0, 0, 0, 0.5);
    }

    h1 {
      color: #dc656e;
      font-size: 35px;
    }

    input {
      border: 0;
      border-bottom: 1px solid rgb(0, 0, 0, 0.3);
      width: 80%;
      padding: 0 15px;
      color: #dc656e;
      font-weight: bold;
      margin: 20px;

      &::placeholder {
        color: rgb(0, 0, 0, 0.3);
      }

      &:focus {
        border-bottom: 1px solid #dc656e;

        &::placeholder {
          font-size: 10px;
          color: #dc656e;
          font-weight: bold;
        }
      }
    }

    span {
      color: #f64c75;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      width: 80%;
      background: linear-gradient(-90deg, #92253c, ${darken(0.1, '#92253C')});
      font-weight: bold;
      color: #fff;
      border: 0;
      font-size: 16px;
      border-radius: 2px;

      &:hover {
        background: linear-gradient(-90deg, ${darken(0.1, '#92253c')}, #92253c);
      }
    }

    a {
      color: black;
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
  -webkit-box-shadow: 7px 7px 5px 0px rgba(50, 50, 50, 0.75);
  -moz-box-shadow: 7px 7px 5px 0px rgba(50, 50, 50, 0.75);
  box-shadow: 7px 7px 5px 0px rgba(50, 50, 50, 0.75);
`;
