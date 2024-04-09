import styled from 'styled-components';

import { ToastContainer } from 'react-toastify';

import { Heart } from 'react-feather';

import COLORS from '@/styles/colors';
import NavBar from '../../components/NavBarFolder/NavBar';

import Footer from '../../components/FooterFolder/Footer';

export const TextSpacing = styled.div`
  margin-top: 10px;
`;
export const HeadingSpacing = styled.div`
  margin-top: 20px;
`;

export const HeadingBack = styled.div`
  width: 500px;
  margin-right: 75px;
`;

export const AccountDetails = styled.div`
  width: 100%;
  border-radius: 10px;
  background: ${COLORS.white};
  box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  gap: 32px;
`;

export const AccountContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const OrderHistory = styled.div`
  width: 100%;
  border-radius: 10px;
  background: ${COLORS.white};
  box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.2);
  padding: 24px;
`;

export const FavoritesContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  background: ${COLORS.white};
  box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.2);
  padding-top: 23px;
  padding-right: 23px;
  padding-left: 23px;
  padding-bottom: 23px;
`;

export const LogOutButton = styled.button`
  background: ${COLORS.navy};
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-family: 'Public Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border: transparent;
  border-radius: 8px;
  padding: 16px;
  cursor: pointer;
`;

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
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 16px;
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
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const BlankSpace = styled.div`
  width: 250px;
  height: 200px;
`;

export const Fullscreen = styled.div`
  width: 100%;
  height: 100%;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const FlexContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background-color: ${COLORS.offWhite};
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 48px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 64px;
  width: 100%;
  height: 100%;
`;

export const AccountDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  gap: 32px;
`;

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 500px;
`;
