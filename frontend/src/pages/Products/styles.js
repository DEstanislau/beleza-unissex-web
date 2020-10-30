import styled, { keyframes } from 'styled-components';
import { lighten, darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 50px auto;
  justify-content: center;
  align-items: center;
`;

export const InputArea = styled.div`
  display: flex;
  flex: 1;
  width: 100%;

  form {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 30px;

    div.row {
      display: flex;
      flex: 1;
      justify-content: center;
      flex-direction: row;
      width: 100%;
    }

    input {
      background: #fff;
      border-radius: 4px;
      height: 44px;
      border: 0;
      border-bottom: 1px solid rgb(0, 0, 0, 0.3);
      width: 30%;
      padding: 0 15px;
      color: #dc656e;
      font-weight: bold;
      margin: 20px;

      &::placeholder {
        color: rgba(0, 0, 0, 0.8);
      }

      &:focus {
        border-bottom: 1px solid #002f55;

        &::placeholder {
          font-size: 10px;
          color: #002f55;
          font-weight: bold;
        }
      }
    }

    span {
      color: #f64c75;
      margin: 0 0 10px;
      font-weight: bold;
      align-self: flex-start;
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
`;

export const ContentProducts = styled.div`
  width: 50%;
  /* border-radius: 14px; */
  border: 1px solid black;
  background: #fff;
  min-height: 400px;
  max-height: 500px;
  min-width: 400px;
  margin: 50px auto;
  overflow: scroll;
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: #002f55;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
  margin-top: 30px;

  @media (max-width: 1400px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ContentList = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin: 20px;
  border-radius: 4px;
  background: #002f55;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.6);

  div.right {
    p {
      visibility: hidden;
    }
    border-right: 1px solid rgba(255, 255, 255, 0.5);
  }

  strong {
    display: block;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
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

export const BottomProduct = styled.div`
  button.att {
    margin: 10px;
    height: 40px;
    width: 40px;
    background: ${lighten(0.1, '#002f55')};
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: #ff0000;
    }
  }
`;

const entry = keyframes`
  from{
    opacity: 0
  }
  to{
    opacity: 1
  }
`;

export const ImageEmpty = styled.img`
  margin-left: 20px;
  height: 350px;
  width: 350px;
  animation: ${entry} 5s;
`;

export const TextEmpty = styled.h1`
  animation: ${entry} 5s;
`;
