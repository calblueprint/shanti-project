import styled from 'styled-components';
import COLORS from '../../styles/colors';

export const ViewAllDiv = styled.div`
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
