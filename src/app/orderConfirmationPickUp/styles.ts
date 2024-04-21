import styled from 'styled-components';

import { Heart } from 'react-feather';

import NavBar from '../../components/NavBarFolder/NavBar';

export const FavoriteDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 50px;
  margin-top: 30px;
  margin-right: 20px;
`;

export const OutterFavoriteDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 10px;
  background: var(--White, #fff);
  box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.2);
  width: 800px;
  max-height: 100%;
  margin-top: 20px;
  margin-right: 60px;
  margin-left: 60px;
  padding-right: 20px;
  padding-left: 10px;
  padding-top: 10px;
`;

export const ScrollDiv = styled.div`
  overflow: scroll;
  width: 100%;
`;

export const ImageDiv = styled.div`
  box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.08);
  width: 150px;
  height: 150px;
  margin-left: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
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
`;

export const OutterBox = styled.div`
  width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CenterBox = styled.div`
  display: flex;
  justify-content: center;
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
  margin-top: 20px;
`;

export const LabelBox1 = styled.div`
  width: 250px;
  height: 100%;
  padding: 20px;
`;

export const LabelBox = styled.div`
  width: 150px;
  height: 100%;
  padding: 20px;
  gap: 50px;
  margin-right: 30px;
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

export const AddressText = styled.p`
  color: var(--Black, #101010);
  font-family: Public Sans;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 20px;
  margin-left: 45px;
`;

export const DateText = styled.p`
  color: var(--Black, #101010);
  margin-top: 20px;
  margin-left: 45px;

  font-family: Public Sans;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration-line: underline;
`;

export const PickUpText = styled.p`
  color: var(--Marine-Blue, #333286);
  text-align: right;
  /* Body 2 - Bold */
  font-family: Public Sans;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 15px;
`;

export const ColDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 750px;
`;

export const AddressDiv = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
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
  width: 100%;
`;
export const RightColumnDiv = styled.div`
  display: flex;
  flex-flow: column;
  align-items: start;
  margin-left: 10px;
  width: 100%;
`;

export const BackButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  width: 800px;
  margin-left: 80px;
  margin-top: 40px;
`;

export const WhiteBackgroundDiv = styled.div`
  border-radius: 8px;
  background: var(--White, #fff);
  height: 430px;
  width: 350px;
  padding-top: 20px;
  box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.1);
`;

export const BottomColumnDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-evenly;
  justify-content: space-around;
  width: 100%;
  margin-left: 20px;
  margin-bottom: 30px;
  gap: 30px;
`;

export const TextDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 60px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const TextDiv1 = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  margin-left: 20px;
  margin-top: 15px;
`;

export const PageDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

export const ShippingDetailsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 10px;
  background: var(--White, #fff);
  box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.2);
  width: 467px;
  height: auto;
  max-height: 100%;
  padding: 36px 34px;
  gap: 33px;
  max-height: 100%;
  margin-top: 205px;
  margin-bottom: 30px;
  margin-right: 40px;
`;

export const DetailsHeader = styled.p`
  color: var(--Navy, #1b3679);
  font-family: Public Sans, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const CenterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
`;
