import styled from 'styled-components';

import { Heart } from 'react-feather';

import NavBar from '../../components/NavBarFolder/NavBar';

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
  margin-top: 20px;
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
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-bottom: 100px;
`;

export const Heading = styled.h1`
  font-family: 'Public Sans', sans-serif;
  color: black;
  margin-bottom: 0px;
  font-size: 30px;
`;

export const OutterDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 200px;
  width: 800px;
`;

export const BackButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 200px;
  margin-bottom: 55px;
  text-align: left;
  width: 800px;
`;

export const Backtext = styled.p`
  padding-top: 5px;
`;

export const HeartIcon = styled(Heart)`
  color: #333286;
  width: 30px;
  height: 30px;
  fill: #333286;
  margin-right: 25px;
`;

export const TransparentButton = styled.button`
  background-color: transparent;
  border: transparent;
`;

export const NavBarMovedUP = styled(NavBar)`
  position: relative;
`;

export const ProductNameDiv = styled.div`
  width: 350px;
  height: 100%;
  gap: 40px;
`;

export const ViewItem = styled.button`
  background: #1b3679;
  color: #fbfbfb;
  text-align: center;
  width: 132px;
  height: 28px;
  flex-shrink: 0;
  margin-top: 26px;
  padding-top: 3px;
  padding-right: 10px;
  padding-left: 10px;
  padding-bottom: 3px;
  border: none;
  border-radius: 5px;
  line-height: normal;
  border-radius: 14px;
`;

export const StatusButton = styled.button`
  margin-left: auto;
  margin-right: 0;
  color: black;
  text-align: center;
  width: 210px;
  height: 30px;
  flex-shrink: 0;
  padding-top: 3px;
  padding-right: 10px;
  padding-left: 10px;
  padding-bottom: 3px;
  border: none;
  border-radius: 16.5px;
  background: var(--Baby-Blue, #c7ddff);
`;

export const Body1Bold = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
