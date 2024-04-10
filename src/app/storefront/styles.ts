import styled from 'styled-components';

import {
  Heart,
  User,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
} from 'react-feather';

import { Body3 } from '@/styles/fonts';

import Link from 'next/link';

import NavBar from '../../components/NavBarFolder/NavBar';

import COLORS from '../../styles/colors';

export const StickyHeader = styled.div`
  position: fixed;
  background-color: ${COLORS.periwinkle};
  filter: drop-shadow(0px 4px 7px rgba(0, 0, 0, 0.1));
  width: 1470px;
  height: 10px;
  z-index: 2;
`;

export const CategoryButton = styled.button<{ $selected?: boolean }>`
  background-color: ${props =>
    props.$selected ? COLORS.navy : COLORS.babyBlue};
  border-radius: 50%;
  width: 60px;
  height: 60px;
  border: transparent;
  cursor: pointer;
`;

export const CategoryButtonLabel = styled.p<{ $selected?: boolean }>`
  color: ${props => (props.$selected ? COLORS.navy : COLORS.black)};
  text-align: center;
  font-family: 'Public Sans', sans-serif;
  padding-top: 5px;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const IndividualContainer = styled.div`
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: flex;
  align-items: center;
  padding-left: 32px;
  padding-right: 32px;
  max-width: 750px;
  width: 100%;
`;

export const NavButton = styled.button`
  margin-top: 30px;
  margin-right: 25px;
  color: ${COLORS.white};
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
`;

export const ImageLinkWrapper = styled(Link)`
  width: 300px;
  height: 300px;
  background-color: ${COLORS.lightGrey};
  padding: 32px;
  margin-bottom: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.10);
`;

export const StorefrontWrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const StorefrontItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 32px;
  justify-content: space-between;
`;

export const HeartIcon = styled(Heart)<{ $favorited: boolean }>`
  width: 30px;
  height: 30px;
  color: ${props => (props.$favorited ? COLORS.marineBlue : COLORS.black)};
  fill: ${props => (props.$favorited ? COLORS.marineBlue : 'none')};
  position: relative;
`;

export const HeartContainer = styled.button`
  position: absolute;
  right: 16px;
  top: 16px;
  background-color: transparent;
  border: none;
  cursor: pointer;
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

export const FavoritePopup = styled.div`
  position: absolute;
  visibility: hidden;
  width: 150px;
  border-radius: 8px;
  padding: 8px;
  // Find better way to refactor this, it shouldn't need a calc
  transform: translate(calc(-50% + 15px), -40px);
  z-index: 1;

  color: ${COLORS.black};
  background: ${COLORS.lightPeriwinkle};
  box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.2);

  ${Body3} {
    display: inline;
  }

  ${HeartContainer}:hover & {
    visibility: visible;
  }
`;

export const OuterDiv = styled.div`
  width: 300px;
  height: 375px;
  position: relative;
`;

export const FrontArrow = styled(ChevronLeft)`
  width: 30px;
  height: 30px;
  position: relative;
`;

export const FrontButton = styled.button<{ $reachedStart?: boolean }>`
  position: relative;
  color: ${COLORS.black};
  background-color: transparent;
  border: none;
  visibility: ${props => (props.$reachedStart ? 'visible' : 'hidden')};
  cursor: pointer;
`;

export const BackArrow = styled(ChevronRight)`
  width: 30px;
  height: 30px;
  position: relative;
`;

export const BackButton = styled.button<{ $reachedEnd?: boolean }>`
  position: relative;
  color: ${COLORS.black};
  background-color: transparent;
  border: none;
  visibility: ${props => (props.$reachedEnd ? 'visible' : 'hidden')};
  cursor: pointer;
`;