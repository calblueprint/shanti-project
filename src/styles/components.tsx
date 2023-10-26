import styled, { createGlobalStyle } from 'styled-components';
import COLORS from './colors';

export const GlobalStyle = createGlobalStyle`
  body {
    background: white;
  }
`;

export const StickyHeader = styled.div`
  position: fixed;
  background-color: ${COLORS.lightPeriwinkle};
  filter: drop-shadow(0px 4px 7px rgba(0, 0, 0, 0.1));
  width: 1470px;
  height: 180px;
`;

export const Logo = styled.div`
  background-color: yellow;
  float: left;
  height: 50px;
  width: 110px;
  margin: 20px;
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
