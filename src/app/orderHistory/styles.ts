// styles.ts (for styled-components)
import styled from 'styled-components';
import COLORS from '@/styles/colors';
import NavBar from '../../components/NavBarFolder/NavBar';

import Footer from '../../components/FooterFolder/Footer';

export const FooterMoved = styled(Footer)`
  left: 0;
`;

export const NavBarMovedUP = styled(NavBar)`
  position: relative;
`;

export const BackButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 200px;
  margin-bottom: 30px;
  margin-top: 50px;
  text-align: left;
  width: 800px;
  padding-right: 40px;
`;

export const OutterBox = styled.div`
  width: 800px;
  margin-top: 40px;
  margin-bottom: 70px;
  min-height: 50px;
`;

export const OrderHistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background: ${COLORS.white};
  box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.2);
  width: 800px; // Width of the outer box
  height: auto;
  min-height: 300px;
  margin-top: 20px;
  padding-top: 10px;
`;

export const OrderHistoryBox = styled.div`
  width: 100%; // Make internal box take full width of the container
  margin: 20px 0; // Keep vertical spacing between orders
  padding: 30px; // Inner spacing for content inside the box
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;
`;
export const Fullscreen = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${COLORS.offWhite};
`;
