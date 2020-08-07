import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.4);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: white;
      margin: 0 0 10px;

      &:focus {
        border: 2px solid rgba(0, 0, 0, 0.2);
      }

      &::placeholder {
        color: white;
      }
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
    margin: 10px;
    height: 44px;
    width: 300px;
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
    width: 300px;
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
