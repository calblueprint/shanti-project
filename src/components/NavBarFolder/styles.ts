import styled from 'styled-components';

import { User, ShoppingCart } from 'react-feather';
import Link from 'next/link';
import COLORS from '../../styles/colors';

export const CartTotalCircle = styled.div<{ $isZero?: boolean }>`
  display: ${props => (props.$isZero ? 'none' : 'content')};
  width: 24px;
  height: 24px;
  border-radius: 50%;
  position: absolute;
  top: -12px;
  right: -12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${COLORS.white};
  background: ${COLORS.marineBlue};
`;

export const UserProfileIcon = styled(User)`
  color: ${COLORS.black};
`;

export const ShoppingCartIcon = styled(ShoppingCart)`
  color: ${COLORS.black};
`;

export const NavBarComp = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  position: relative;
  width: 100%;
  background: ${COLORS.lightPeriwinkle};
  box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.1);
`;

export const ButtonsDiv = styled.div`
  width: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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

export const IconWithLabelLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: ${COLORS.black};
  position: relative;
`;
