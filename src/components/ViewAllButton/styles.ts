import styled from 'styled-components';
import { ArrowRight } from 'react-feather';
import COLORS from '../../styles/colors';


export const ViewAllDiv = styled.div`
  width: 80px;
  gap: 5px;
  display: flex;
  align-items: center;
  color: ${COLORS.black};
  background-color: transparent;
  border: transparent;
  &:hover {
    text-decoration: underline;
  }
`;

export const placeHolder = '';

export const ArrowRightIcon = styled(ArrowRight)`
  width: 20px;
  height: 20px;
`;
