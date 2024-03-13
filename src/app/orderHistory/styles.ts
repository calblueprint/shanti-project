// styles.ts (for styled-components)
import styled from 'styled-components';
import NavBar from '../../components/NavBarFolder/NavBar';

import Footer from '../../components/FooterFolder/Footer';

export const FooterMoved = styled(Footer)`
  transform: translateY(50px);
  position: fixed;
  left: 0;
  bottom: 50px;
`;

export const NavBarMovedUP = styled(NavBar)`
  position: relative;
`;

export const OutterBox = styled.div`
  width: 900px;
  margin: 0 auto; // This will center the OutterBox
`;

export const OrderHistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background: var(--White, #fff);
  box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.2);
  width: 800px; // Width of the outer box
  height: 700px;
  overflow: scroll;
  margin-top: 10px;
  padding: 0; // Ensure there's no padding pushing the internal boxes inward
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
