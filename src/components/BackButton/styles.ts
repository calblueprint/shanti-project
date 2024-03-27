import styled from 'styled-components';
import { ArrowLeft } from 'react-feather';
import Link from 'next/link';
import COLORS from '../../styles/colors';

export const BackLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: ${COLORS.black};
  width: 56px;
  gap: 5px;
  &:hover {
    text-decoration: underline;
  }
`;

export const ArrowLeftIcon = styled(ArrowLeft)`
  width: 17px;
  height: 17px;
`;
