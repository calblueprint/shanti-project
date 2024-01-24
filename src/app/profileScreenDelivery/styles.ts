import styled, { createGlobalStyle } from 'styled-components';

import { ToastContainer } from 'react-toastify';

import NavBar from '../../components/NavBarFolder/NavBar';

import Footer from '../../components/FooterFolder/Footer';

export const GlobalStyle = createGlobalStyle`
  body {
    background:white;
    color: black;
    overflow: visible;
    
  }
`;

export const TextSpacing = styled.div`
  margin-top: 29px;

`;
export const HeadingSpacing = styled.div`
  margin-top: 33px;

`;

export const HeadingBack = styled.div`
  margin-left: 171px;
  margin-top: 41px;

`;

export const AccountDetails = styled.div`
  margin-left: 189px;
  margin-top: 73px;
  width: 543px;
  height: 290px;
  border-radius: 10px;
  background: var(--White, #fff);
  box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.2);
`;

export const OrderHistory = styled.div`
  margin-left: 800px;
  margin-top: -291px;
  margin-bottom: 47px;
  width: 405px;
  height: 387px;
  border-radius: 10px;
  background: var(--White, #fff);
  box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.2);
`;

export const FavoritesContainer = styled.div`
  margin-left: 800px;
  width: 543.4px;
  height: 343px;
  border-radius: 10px;
  background: var(--White, #fff);
  box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.2);
`;

export const LogOutButton = styled.button`
  background: #00507f;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: transparent;
  border-radius: 5px;
  width: 300px;
  height: 50px;
  z-index: 1000;
  margin-top: 47px;
`;
/* transform: translateY(200px); */

export const PopUp = styled(ToastContainer)`
  transform: translate(-150px, 250px);
  position: fixed;
`;

export const FooterMoved = styled(Footer)`
  transform: translateY(400px);
`;

export const NavBarMovedUP = styled(NavBar)`
  position: relative;
`;

export const FavoriteDiv = styled.div`
display: flex;
flex-direction: row;
align-items: start;
justify-content: space-around;
width: 100%;
margin-bottom: 50px;
margin-top: 30px;

`;