import styled from 'styled-components';

import { Heart, User, ShoppingCart, ArrowLeft, ArrowRight } from 'react-feather';

import { Body1 } from '@/styles/fonts';

import NavBar from '../../components/NavBarFolder/NavBar';

import COLORS from '../../styles/colors';

interface props {
  isClicked: boolean;
  isHovering: boolean;
}

export const StickyHeader = styled.div`
  position: fixed;
  background-color: var(--Light-Periwinkle, #f4f7ff);
  filter: drop-shadow(0px 4px 7px rgba(0, 0, 0, 0.1));
  width: 1470px;
  height: 10px;
  z-index: 2;
`;

export const Button = styled.button<{ $pickColor?: boolean }>`
  background-color: ${props => (props.$pickColor ? '#1B3679' : '#C7E1FF')};
  border-radius: 50%;
  width: 60px;
  height: 60px;
  border: transparent;
`;

export const Label = styled.p<{ $pickColor?: boolean }>`
  color: ${props => (props.$pickColor ? '#1B3679' : '#000')};
  text-align: center;
  font-family: 'Public Sans', sans-serif;
  padding-top: 5px;
  font-size: 18px;
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
  margin-left: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: flex;
  align-items: center;
  z-index: 1100;
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
  background-color: var(--lightGrey, #f4f4f4);
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
  padding-top: 80px;
  padding-bottom: 38px;
  height: 100px;
  margin-left: 60px;
  font-family: 'Public Sans', sans-serif;
  color: black;
`;

export const HeartIcon = styled(Heart)<props>`
  color: ${props => (props.isClicked ? '#333286' : 'black')};
  width: 30px;
  height: 30px;
  fill: ${props => (props.isClicked ? '#333286' : 'none')};
  position: relative;
`;

export const HeartContainer = styled.button`
  transform: translate(230px, -260px);
  position: relative;
  background-color: transparent;
  border: none;
`;

export const NavBarZeroIndex = styled(NavBar)`
  position: fixed;
`;

export const CartTotalCircle = styled.div<{ $isZero?: boolean }>`
  width: 20px;
  height: 20px;
  background: ${COLORS.marineBlue};
  border-radius: 50%;
  text-align: center;
  transform: translate(19px, -58px);
  color: ${COLORS.white};
  display: ${props => (props.$isZero ? 'none' : 'content')};
`;

export const UserProfileIcon = styled(User)`
  margin-left: 5px;
`;

export const ShoppingCartIcon = styled(ShoppingCart)`
  margin-left: 3px;
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

export const Addie = styled.p`
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const Hover = styled.p<props>`
  visibility: ${props => (props.isHovering ? 'visible' : 'hidden')};
  transform: translate(170px, -335px);
  color: black;
  border: none;
  width: 156px;
  height: 26px;
  border-radius: 8px;
  background: var(--Light-Periwinkle, #f4f7ff);
  box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.2);
  padding-top: 6px;
  padding-bottom: 6px;
  position: relative;
  text-align: center;
`;

export const Body1Translated = styled(Body1)`
  transform: translateY(-100px);
`;

export const OutterDiv = styled.div`
  width: 300px;
  height: 375px;
`;

export const Front = styled(ArrowLeft)`
  width: 30px;
  height: 30px;
  position: relative;
`;

export const FrontButton = styled.button`
  position: relative;
  background-color: transparent;
  border: none;
`;

export const Back = styled(ArrowRight)`
  width: 30px;
  height: 30px;
  position: relative;
`;

export const BackButton = styled.button`
  position: relative;
  background-color: transparent;
  border: none;
`;