import styled, { createGlobalStyle } from 'styled-components';

import { Heart } from 'react-feather';

import NavBar from '../../components/NavBar';

export const GlobalStyle = createGlobalStyle`
  body {
    background:white;
    color:black;
  }

`;
interface props {
  isClicked: boolean;
}

export const StickyHeader = styled.div`
  position: fixed;
  background-color: var(--Light-Periwinkle, #f4f7ff);
  filter: drop-shadow(0px 4px 7px rgba(0, 0, 0, 0.1));
  width: 1470px;
  height: 10px;
  z-index: 2;
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
  font-family: 'Public Sans', sans-serif;
  padding-top: 5px;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const IndividualContainer = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ItemContainer = styled.div`
  width: 290px;
  height: 290px;
  flex-direction: row;
`;

export const ButtonsContainer = styled.div`
  margin-left: 400px;
  margin-right: 400px;
  width: 600px;
  height: 230px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: fixed;
  align-items: center;
  z-index: 1100;
  transform: translate(0px, -30px);
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
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 30px;
`;

export const StorefrontItem = styled.div`
  width: calc(25% - 40px);
  margin-bottom: 50px;
`;

export const ShopAllText = styled.h1`
  padding-top: 230px;
  padding-left: 50px;
  font-family: 'Public Sans', sans-serif;
  color: black;
`;

export const HeartIcon = styled(Heart)<props>`
  color: ${props => (props.isClicked ? 'red' : 'black')};
  width: 30px;
  height: 30px;
  fill: ${props => (props.isClicked ? 'red' : '#c7ddff')};
  position: relative;
`;

export const HeartContainer = styled.button`
  transform: translate(245px, -280px);
  position: relative;
  background-color: transparent;
  border: none;
`;

export const NavBarZeroIndex = styled(NavBar)``;
