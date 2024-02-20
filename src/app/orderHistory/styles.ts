// styles.ts (for styled-components)
import styled, { createGlobalStyle } from 'styled-components';
import NavBar from '../../components/NavBarFolder/NavBar';

import Footer from '../../components/FooterFolder/Footer';

export const FooterMoved = styled(Footer)`
  transform: translateY(50px);
`;

export const NavBarMovedUP = styled(NavBar)`
  position: relative;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    background:white;
    color: black;
    overflow: visible;
  }
`;

export const OutterBox = styled.div`
  width: 900px;
  margin-left: 500px;
`;

export const OrderHistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: var(--White, #fff);
  box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.2);
  width: 900px;
  height: 1021px;
  overflow: scroll;
  margin-top: 10px;
`;

export const OrderHistoryBox = styled.div`
  width: 80%;
  max-width: 960px; // Adjust to match the design width
  margin: 20px 0; // Spacing between the orders
  padding: 30px; // Inner spacing
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;
`;
