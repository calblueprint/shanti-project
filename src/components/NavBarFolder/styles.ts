import styled from 'styled-components';

import { User, ShoppingCart } from 'react-feather';
import COLORS from '../../styles/colors';

export const CartTotalCircle = styled.div<{ $isZero?: boolean }>`
  width: 20px;
  height: 20px;
  background: ${COLORS.marineBlue};
  border-radius: 50%;
  text-align: center;
  transform: translate(19px, -58px);
  color: ${COLORS.white};
  display: ${props => (props.$isZero ? 'none' : 'content')};
`;

export const UserProfileIcon = styled(User)`
  margin-left: 5px;
  color: ${COLORS.black};
`;

export const ShoppingCartIcon = styled(ShoppingCart)`
  margin-left: 3px;
  color: ${COLORS.black};
`;

export const NavBarComp = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 140px;
  padding: 20px;
  position: relative;
  width: 100%;
  background: ${COLORS.lightPeriwinkle};
  box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

export const ButtonsDiv = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const LocationDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 250px;
  margin-right: 60px;
  color: ${COLORS.black};
  font-family: Public Sans;
  font-style: normal;
  line-height: normal;
`;

export const Addie = styled.p`
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const ProfileButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: none;
`;
export const ProfileFont = styled.div`
  margin-left: 5px;
  font-size: 18px;
  font-style: normal;
  color: ${COLORS.black};
`;
