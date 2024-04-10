import styled from 'styled-components';

import { Heart } from 'react-feather';
import Link from "next/link";
import COLORS from '@/styles/colors';

import NavBar from '../../components/NavBarFolder/NavBar';

export const FavoriteDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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
  height: 650px;
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
  width: 800px;
  height: 100%;
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
  cursor:pointer;
`;

export const NavBarMovedUP = styled(NavBar)`
  position: relative;
`;

export const ProductNameDiv = styled.div`
  width: 350px;
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

export const Fullscreen = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageLinkWrapper = styled(Link)`
width:100px;
height:100px;
background-color:${COLORS.lightGrey};
padding:32px;
margin-bottom:8px;
display:flex;
justify-content:center;
align-items:center;
box-shadow: 1px 1px 4px 1px rgba(0,0,0,.1);
`;

