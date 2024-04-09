import styled from 'styled-components';

import { Heart } from 'react-feather';

import NavBar from '../../components/NavBarFolder/NavBar';

export const FavoriteDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 50px;
  margin-top: 30px;
  gap: 120px;
`;

export const OrderDetailsDiv = styled.div`
  width: 750px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const CenterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const OutterFavoriteDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 10px;
  background: var(--White, #fff);
  box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.2);
  width: 650px;
  height: auto;
  max-height: 793px;
  margin-top: 5px;
  margin-bottom: 50px;
  gap: 24px;
  padding: 36px 32px;
`;

export const ScrollDiv = styled.div`
  overflow: scroll;
  width: 100%;
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
  margin-left: 25px;
  width: 100%;
`;

export const OutterBox = styled.div`
  width: 750px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Backtext = styled.p`
  color: var(--Black, #101010);
  /* Body 1 - Bold, button */
  font-family: Public Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const HeartIcon = styled(Heart)`
  color: #333286;
  width: 30px;
  height: 30px;
  fill: #333286;
`;

export const TransparentButton = styled.button`
  background-color: transparent;
  border: transparent;
`;

export const NavBarMovedUP = styled(NavBar)`
  position: static;
`;

export const Label = styled.p`
  margin-top: 9px;
`;

export const Category = styled.p`
  margin-top: 10px;
`;

export const LabelBox = styled.div`
  width: 150px;
  height: 100%;
  display: flex;
  align-self: center;
  flex-direction: column;
  gap: 9px;
`;

export const HeaderText = styled.h3`
  color: var(--Black, #101010);
  margin-top: 30px;
  margin-bottom: 20px;
  text: center;
  color: var(--Black, #101010);
  font-family: Public Sans;
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ShippingDetailsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-start;
  border-radius: 10px;
  background: var(--White, #fff);
  box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.2);
  width: 467px;
  height: auto;
  max-height: 793px;
  margin-top: 10px;
  margin-bottom: 50px;
  padding: 36px 34px;
  gap: 33px;
`;

export const DetailsHeader = styled.p`
  color: var(--Navy, #1b3679);
  font-family: Public Sans, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const DetailsText = styled.p`
  color: var(--Black, #101010);
  font-family: Public Sans;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 20px;
`;

export const BottomColumnDiv = styled.div`
  display: flex;
  flex-flow: row;
  align-items: space-evenly;
  justify-content: space-around;
  width: 100%;
`;

export const PageDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

export const TopColumnDiv = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: space-around;
  margin-bottom: 20px;
`;

export const OrderSummaryDiv = styled.div`
  overflow: scroll;
  width: 350px;
  height: 300px;
`;

export const ItemSummaryDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
`;

export const OrderTotalDiv = styled.div`
  height: 50px;
  padding-top: 10px;
  width: 350px;
  padding-left: 0px;
  border-top: 1px black solid;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
`;

export const LeftColumnDiv = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: space-evenly;
`;
export const RightColumnDiv = styled.div`
  display: flex;
  flex-flow: column;
  margin-left: 20px;
  margin-top: 127px;
`;

export const WhiteBackgroundDiv = styled.div`
  border-radius: 8px;
  background: var(--White, #fff);
  height: 430px;
  width: 350px;
  padding-top: 20px;

  box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.1);
`;
