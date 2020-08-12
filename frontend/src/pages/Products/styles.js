import styled from 'styled-components';
import { Textarea as TextAreaUnform } from '@rocketseat/unform';
import { lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px auto;

  h1 {
    align-self: center;
  }

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
      color: rgba(255, 255, 255, 255);
      margin: 20px;

      &:focus {
        border: 2px solid black;
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

export const Body = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div.down {
    width: 0%;
    margin: 20px;
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
`;

export const Textarea = styled(TextAreaUnform)`
  background: rgba(0, 0, 0, 0.4);
  border: 0;
  border-radius: 4px;
  padding: 0 15px;
  color: rgba(255, 255, 255, 255);
  margin: 20px;

  &:focus {
    border: 2px solid black;
  }

  &::placeholder {
    color: white;
    font-weight: bold;
  }
`;
