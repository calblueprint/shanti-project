import styled from 'styled-components';

import { Trash2 } from 'react-feather';
import COLORS from '../../styles/colors';

import NavBar from '../../components/NavBarFolder/NavBar';

import Footer from '../../components/FooterFolder/Footer';

export const FavoriteDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 50px;
  margin-top: 30px;
`;

export const ImageDiv = styled.div`
  width: 130px;
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
  padding-left: 40px;
`;

export const NavBarMovedUP = styled(NavBar)`
  position: relative;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  height: 50px;
  margin-top: 20px;
  padding: 30px;
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
  padding-left: 40px;
  padding-right: 40px;
`;

export const PageDiv1 = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100%; /*or 100vh */
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const BackButtonDiv1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 200px;
  margin-bottom: 55px;
  text-align: left;
  width: 800px;
  padding-left: 40px;
  padding-right: 40px;
`;

export const Wrapper = styled.div`
  min-height: 100%; /*or 100vh */
  position: relative;
  background: var(--Light-Periwinkle, #f4f7ff);
  justify-content: space-evenly;
  align-items: center;
  padding-top: 25px;
  padding-bottom: 25px;
  padding-left: 20px;
  gap: 20px;
`;

export const OrderSummaryDiv = styled.div`
  overflow: scroll;
  width: 350px;
  height: 300px;
  padding: 20px;
`;

export const ItemSummaryDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  justify-content: space-between;
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

export const LeftColumnDiv1 = styled.div`
  display: flex;
  flex-flow: column;
  margin-left: 50px;
`;

export const CheckoutButton1 = styled.button`
  background: #1b3679;

  height: 40px;
  margin-top: 20px;

  border: none;
  border-radius: 5px;

  color: var(--White, #fff);
  text-align: center;
  font-family: 'Public Sans', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Qty = styled.p`
  width: 100%;
  padding-left: 290px;
`;

export const RightColumnDiv1 = styled.div`
  display: flex;
  flex-flow: column;
  margin-left: 200px;
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

export const PageDiv = styled.div`
  display: flex;
  flex-direction: col;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 20px;
`;

export const LeftColumnDiv = styled.div`
  flex: 1;
  padding-right: 20px;
`;

export const InformationText = styled.div`
  width: 730px;
  height: 50px;
  border-radius: 4px;
  margin-top: 14px;
  margin-bottom: 14px;
  border: 1px solid ${COLORS.neutralGrey};
  background: ${COLORS.lightGrey};
  display: flex; /* Use flexbox */
  align-items: center; /* Center vertically */
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-left: 20px;
`;

export const DeliveryContainer = styled.div`
  margin-left: 80px;
  margin-right: 80px;
  margin-bottom: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: col;
`;

export const InformationContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 40px;
`;


export const OutterDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OrderButton = styled.button`
  margin-top: 26px;
  width: 350px;
  height: 50px;
  flex-shrink: 0;
  align-items: center;
  background: ${COLORS.navy};
  border-radius: 8px;
  color: ${COLORS.white};
  font-size: 20px;
  font-family: 'Public Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const OrderSummary = styled.div`
  width: 350px;
  height: 360px;
  border-radius: 8px;
  background: ${COLORS.white};
  box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.15);
  align-items: center;
`;

export const OrderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
`;

export const RightColumnDiv = styled.div`
  flex: 1;
  padding-left: 20px;
`;

export const Heading = styled.h1`
  font-family: 'Public Sans', sans-serif;
  color: black;
  margin-bottom: 20px;
  font-size: 30px;
`;

export const BackButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  width: 800px;
  margin-left: 40px;
`;

export const CheckoutButton = styled.button`
  background: #1b3679;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background: #0e2351;
  }
`;
