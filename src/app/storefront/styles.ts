import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background:white;
  }
`;
interface props {
  isClicked: boolean;
}
export const Button = styled.button<props>`
  background-color: ${props => (props.isClicked ? '#00507f' : '#C7E1FF')};

  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: transparent;
`;

export const Label = styled.p<props>`
  color: ${props => (props.isClicked ? '#00507f' : '#000')};
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const IndividualContainer = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonsContainer = styled.div`
  width: 600px;
  height: 600px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const IconButtons = styled.button`
  margin-top: 30px;
  margin-right: 25px;
  color: white;
  text-align: center;
  font-family: sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  width: 70px;
  height: 40px;
  background: black;
  border: transparent;
  border-radius: 5px;
  float: right;
`;
