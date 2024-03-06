import styled from 'styled-components';

import { ToastContainer } from 'react-toastify';

import { Heart } from 'react-feather';

import NavBar from '../../components/NavBarFolder/NavBar';

import Footer from '../../components/FooterFolder/Footer';

export const TextSpacing = styled.div`
  margin-top: 10px;
`;
export const HeadingSpacing = styled.div`
  margin-top: 20px;
`;

export const HeadingBack = styled.div`
  margin-left: 300px;
`;

export const AccountDetails = styled.div`
  margin-left: 300px;
  margin-top: 50px;
  width: 500px;
  height: 350px;
  border-radius: 10px;
  background: var(--White, #fff);
  box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: left;
  padding-top: 29px;
  padding-right: 29px;
  padding-left: 29px;
  padding-bottom: 29px;
`;

export const OrderHistory = styled.div`
  margin-left: 900px;
  margin-top: -350px;
  margin-bottom: 47px;
  width: 600px;
  height: 350px;
  border-radius: 10px;
  background: var(--White, #fff);
  box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.2);
  padding-top: 23px;
  padding-right: 23px;
  padding-left: 23px;
  padding-bottom: 23px;
`;

export const FavoritesContainer = styled.div`
  margin-left: 900px;
  width: 600px;
  height: 350px;
  border-radius: 10px;
  background: var(--White, #fff);
  box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.2);
  padding-top: 23px;
  padding-right: 23px;
  padding-left: 23px;
  padding-bottom: 23px;
`;

export const LogOutButton = styled.button`
  background: #1B3679;
  color: #fff;
  text-align: center;
  font-size: 25px;
  font-family: body1;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: transparent;
  border-radius: 5px;
  width: 405px;
  height: 300px;
  z-index: 1000;
  margin-top: 120px;
  padding-top: 10px;
  margin-left: 2px;
  margin-right: 2px;
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
  transform: translateY(50px);
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
  width: 25px;
  height: 25px;
  fill: #333286;
`;

export const BackButtonDiv = styled.div`
  margin-bottom: 40px;
`;

export const HeaderDiv = styled.div`
  display: flex;
  width: 100%;

  align-items: center;
  justify-content: space-between;
`;

export const ProductNameDiv = styled.div`
  width: 250px;
`;

export const BlankSpace = styled.div`
  width: 250px;
  height: 200px;
`;
