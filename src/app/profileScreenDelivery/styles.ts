import styled, { createGlobalStyle } from 'styled-components';

import { ToastContainer } from 'react-toastify';

import { Heart } from 'react-feather';

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
  margin-top: 10px;

`;
export const HeadingSpacing = styled.div`
  margin-top: 30px;

`;

export const HeadingBack = styled.div`
  margin-left: 171px;
  margin-top: 41px;

`;

export const AccountDetails = styled.div`
  margin-left: 189px;
  margin-top: 73px;
  width: 350px;
  height: 290px;
  border-radius: 10px;
  background: var(--White, #fff);
  box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: left;
  padding-right: 30px;
`;

export const OrderHistory = styled.div`
  margin-left: 800px;
  margin-top: -291px;
  margin-bottom: 47px;
  width: 543.4px;
  height: 343px;
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
  font-size: 25px;
  font-family: normal;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: transparent;
  border-radius: 5px;
  width: 350px;
  height: 300px;
  z-index: 1000;
  margin-top: 100px;
  padding-top: 10px;
  padding-right: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
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

export const HeartIcon = styled(Heart)`
  color: #333286;
  width: 20px;
  height: 20px;
  fill: #333286;
`;

export const BackButtonDiv = styled.div`
  margin-bottom: 68px;

`