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
`;
/* transform: translateY(200px); */

export const PopUp = styled(ToastContainer)`
  transform: translate(-150px, 250px);
  position: fixed;
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

export const OutterFavoriteDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background: var(--White, #fff);
  box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.2);
  width: 800px;
  height: 700px;
  overflow: scroll;
  margin-top: 10px;
`;

export const BackDiv = styled.button`
  display: flex;
  flex-direction: row;
  align: center;
  color: black;
  background-color: transparent;
  border: transparent;
  margin-bottom: 25px;
  margin-top: 25px;
`;

export const OutterBox = styled.div`
  width: 900px;
  margin-left: 500px;
`;

export const Backtext = styled.p`
  padding-top: 5px;
`;

export const HeartIcon = styled(Heart)`
  color: #333286;
  width: 30px;
  height: 30px;
  fill: #333286;
`;

export const NavBarZeroIndex = styled(NavBar)`
  z-index: 0;
  position: fixed;
  margin-bottom: 100px;
`;

export const FooterMoved = styled(Footer)`
  transform: translateY(50px);
`;

export const TransparentButton = styled.button`
  background-color: transparent;
  border: transparent;
`;

export const NavBarMovedUP = styled(NavBar)`
  position: relative;
`;
