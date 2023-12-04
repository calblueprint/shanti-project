import styled, { createGlobalStyle } from 'styled-components';

import { User, ShoppingCart } from 'react-feather';
import COLORS from './colors';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;700&display=swap'); 
  
  body {
    background: ${COLORS.offWhite};
    color: ${COLORS.black};
    font-family: 'Public Sans', sans-serif;
  }
  span{
  
    color:black;
  }
`;

export const StickyHeader = styled.div`
  position: fixed;
  background-color: ${COLORS.lightPeriwinkle};
  filter: drop-shadow(0px 4px 7px rgba(0, 0, 0, 0.1));
  width: 1470px;
  height: 180px;
`;

export const Logo = styled.div`
  background-color: yellow;
  float: left;
  height: 50px;
  width: 110px;
  margin: 20px;
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
  background: ${COLORS.black};
  border: transparent;
  border-radius: 5px;
  float: right;
  z-index: 101;
`;

export const NavBarComp = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
  height: 140px;
  padding-top: 20px;
  position: fixed;

  width: 100%;
  background: ${COLORS.lightPeriwinkle};
  box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

export const ButtonsDiv = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 15px;
`;

export const BackDiv = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: black;
  background-color: transparent;
  border: transparent;
  margin-left: 80px;
  margin-top: 55px;
`;

export const LocationDiv = styled.div`
  display: flex;
  flex-direction: column;

  width: 300px;
  height: 250px;
  margin-right: 60px;

  color: ${COLORS.black};

  font-family: Public Sans;
  font-style: normal;
  line-height: normal;
`;

export const ContactDiv = styled.div`
  width: 250px;
  height: 250px;
  margin-right: 130px;
  margin-left: 30px;
  color: ${COLORS.black};
  text-align: center;
  font-family: Public Sans;
  font-size: 20px;
  font-style: normal;
  line-height: normal;
`;

export const FooterDiv = styled.div`
  display: flex;
  flex-direction: row;
  color: black;
  width: 1290px;
  padding-left: 10px;
  padding-top: 40px;
  margin-left: 70px;
  border-top: 2px solid black;

  height: 200px;
`;

export const Addie = styled.p`
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const CartTotalCircle = styled.div<{ $isZero?: boolean }>`
  width: 20px;
  height: 20px;
  background: ${COLORS.marineBlue};
  border-radius: 50%;
  text-align: center;
  transform: translate(19px, -58px);
  color: white;
  display: ${props => (props.$isZero ? 'none' : 'content')};
`;

export const UserProfileIcon = styled(User)`
  margin-left: 5px;
`;

export const ShoppingCartIcon = styled(ShoppingCart)`
  margin-left: 3px;
`;
