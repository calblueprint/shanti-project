import styled, { createGlobalStyle } from 'styled-components';

import COLORS from '../../styles/colors';

import { Trash2 } from 'react-feather';

import NavBar from '../../components/NavBar';

import Footer from '../../components/Footer';

export const GlobalStyle = createGlobalStyle`
  body {
    background:white;
    color: black;
    overflow: visible;
    
  }
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

  width: 800px;
  height: 500px;
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
  margin-left: 300px;
`;

export const Backtext = styled.p`
  padding-top: 5px;
`;

export const TrashIcon = styled(Trash2)`
  width: 30px;
  height: 30px;
  color: black;
  margin-right: 30px;
  margin-top: 28px;
`;

export const NavBarZeroIndex = styled(NavBar)`
  z-index: 0;
  position: fixed;
  margin-bottom: 100px;
`;

export const FooterMoved = styled(Footer)`
  transform: translateY(300px);
`;

export const TransparentButton = styled.button`
  background-color: transparent;
  border: transparent;
`;

export const NavBarMovedUP = styled(NavBar)`
  position: static;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  height: 50px;
  margin-top: 20px;
`;

export const QuantityButton = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 165px;
  height: 50px;
  border-radius: 8px;
  background-color: ${COLORS.white};
  border: 2px solid ${COLORS.navy};
  color: ${COLORS.navy};
`;

export const PlusMinusButton = styled.button`
  width: 25px;
  height: 25px;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-color: transparent;
  font-size: 20px;
  color: ${COLORS.navy};
`;

export const Label = styled.p`
  margin-top: 20px;
`;

export const LabelBox = styled.div`
  width: 150px;
  height: 100%;
`;

export const PageDiv = styled.div`
  display: flex;
  flex-flow: row;
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

export const ForceColumnDiv = styled.div`
  display: flex;
  flex-flow: column;
  margin-left: 50px;
`;

export const CheckoutButton = styled.button`
  background: #1b3679;

  height: 40px;
  margin-top: 20px;

  border: none;
  border-radius: 5px;

  color: var(--White, #fff);
  text-align: center;
  font-family: Public Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Qty = styled.p`
  width: 100%;
  padding-left: 290px;
`;

export const RightColumnDiv = styled.div`
  display: flex;
  flex-flow: column;
  margin-left: 150px;
  margin-top: 100px;
`;

export const WhiteBackgroundDiv = styled.div`
  border-radius: 8px;
  background: var(--White, #fff);
  height: 430px;
  width: 350px;
  padding-top: 20px;

  box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.1);
`;

export const HeaderShiftRight = styled.h2`
  margin-right: 30px;
`;

export const PShiftRight = styled.p`
  margin-right: 30px;
`;

export const HeaderShiftLeft = styled.h2`
  margin-left: 15px;
`;

export const PShiftLeft = styled.p`
  margin-left: 15px;
`;
