const COMPONENTS = {};

export default COMPONENTS;

import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background:white;
  }
`;

export const NavBarComp = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
  height: 150px;
  padding-top: 20px;

  width: 100%;
  background: var(--Light-Periwinkle, #f4f7ff);
  box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.1);
`;

export const ButtonsDiv = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 20px;
`;
