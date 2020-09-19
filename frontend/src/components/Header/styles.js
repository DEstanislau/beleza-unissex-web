import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(-90deg, #002f55, #002f55);
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 70px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }

    a {
      font-weight: bold;
      color: white;
      margin: 10px;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-right: 20px;
  padding-right: 20px;
  border-right: 1px solid #eee;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: white;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #f1f1f1;
    }
  }

  img {
    width: 32px;
    height: 32px;
    border-radius: 50px;
  }
`;
