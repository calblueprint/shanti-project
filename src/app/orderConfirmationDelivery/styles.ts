import styled from 'styled-components';

import { Heart } from 'react-feather';

import NavBar from '../../components/NavBarFolder/NavBar';

export const FavoriteDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-start;
  width: 100%;
  margin-bottom: 50px;
  margin-top: 30px;
`;

export const OutterFavoriteDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 10px;
  background: var(--White, #fff);
  box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.2);
  width: 800px;
  height: 500px;
  margin-top: 10px;
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
`;

export const OutterBox = styled.div`
  width: 900px;
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
  margin-top: 20px;
`;

export const LabelBox = styled.div`
  width: 150px;
  height: 100%;
`;

export const CenterBox = styled.div`
  display: flex;
  justify-content: center;
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

export const AddressDiv = styled.div`
  margin-top: 670px;
  position: absolute;
  display: flex;
  align-items: flex-end;
`;
