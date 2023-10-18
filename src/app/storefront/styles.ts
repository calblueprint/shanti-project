import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background:white;
  }
`;
interface props {
  isClicked: boolean;
}

export const StickyHeader = styled.div`
  position: fixed;
  background-color: lightblue;
  width: 1470px;
  height: 218px;
`;
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
  width: 200px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ItemContainer = styled.div`
  width: 290px;
  height: 290px;
  flex-direction: row;
`;

export const Img = styled.div`
  background-color: yellow;
  float: left;
  height: 50px;
  width: 110px;
  margin: 20px;
`;

export const ButtonsContainer = styled.div`
  margin-left: 400px;
  margin-right: 400px;
  width: 600px;
  height: 230px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const NavButton = styled.button`
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

export const ItemButtons = styled.button`
  width: 290px;
  height: 290px;
  border: transparent;
`;

export const StorefrontWrapper = styled.div`
  display: flex;
  padding-top: 300px;
  padding-left: 50px;
  padding-right: 50px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const StorefrontItem = styled.div`
  width: calc(25% - 20px);
  margin-bottom: 50px;
`;
