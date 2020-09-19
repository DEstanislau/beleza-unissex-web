import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-self: center;
    align-items: center;

    strong {
      color: #000;
      font-size: 24px;
      margin: 0 15px;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }
`;

export const Time = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  opacity: ${(props) => (props.past ? 0.6 : 1)};

  strong {
    display: block;
    color: ${(props) => (props.available ? '#999' : '#ff892e')};
    font-size: 20px;
    font-weight: normal;
  }

  span {
    display: block;
    margin-top: 3px;
    color: ${(props) => (props.available ? '#999' : '#666')};
  }

  div.left {
    margin-right: 20px;
    padding-right: 20px;
    border-right: 1px solid rgb(0, 0, 0, 0.3);
  }
`;
