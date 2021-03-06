import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 50px 50px 120px 50px;
  background-color: #fff;

  h1 {
    align-self: center;
  }

  h3 {
    font-size: 50px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    background: #fff;
    /* height: 100%; */

    input {
      /* background: rgba(0, 0, 0, 0.4); */
      background: #fff;
      border-radius: 4px;
      height: 44px;
      border: 0;
      padding: 0 15px;
      /* color: rgba(255, 255, 255, 255); */
      color: rgba(0, 0, 0, 0.8);
      margin: 0 0 10px;
      font-weight: bold;
      border: 1px solid black;

      &::placeholder {
        color: rgba(0, 0, 0, 0.3);
      }

      &:focus {
        border-bottom: 1px solid #002f55;

        &::placeholder {
          font-size: 10px;
          color: #002f55;
          font-weight: bold;
        }
      }
      /* &:focus {
        border: 1px solid black;
        background-color: rgba(0, 0, 0, 0.4);
      } */
    }

    span {
      color: #f64c75;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(0, 0, 0, 0.3);
      margin: 10px 0 20px;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

export const Body = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 950px) {
    flex-direction: column;
  }

  div.left {
    display: flex;
    flex: 1;
    flex-direction: column;
    margin: 0 30px 0 30px;
    max-width: 600px;
  }

  div.right {
    display: flex;
    flex: 1;
    flex-direction: column;
    margin: 0 30px 0 30px;
    max-width: 600px;
  }

  div.address-number {
    display: flex;
    flex: 1;
    flex-direction: row;

    input.nb1 {
      width: 850px;
      margin-right: 20px;
    }

    input.nb2 {
      width: 60px;
    }

    input.nb3 {
      width: 50%;
      margin-right: 10px;
    }

    input.nb4 {
      width: 50%;
    }
  }
`;

export const Bottom = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px;

  button.att {
    min-width: 200px;
    max-width: 300px;
    margin: 10px;
    height: 44px;
    max-width: 300px;
    background: ${lighten(0.1, '#002f55')};
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: #002f55;
    }
  }

  button.logout {
    min-width: 200px;
    max-width: 300px;
    margin: 10px;
    height: 44px;
    background: ${lighten(0.1, '#B22222')};
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: #b22222;
    }
  }
`;
