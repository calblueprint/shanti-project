import styled from 'styled-components';
import COLORS from '../../styles/colors';

export const Input = styled.input`
  background: ${COLORS.white};
  stroke-width: 1px;
  color: ${COLORS.darkRed};
  width: 420px;
  height: 40px;
  padding-left: 10px;
  border-color: ${COLORS.marineBlue};
`;

export const InputError = styled.span<{ $pickColor?: boolean }>`
  background-color: ${props => (props.$pickColor ? '#00507f' : '#C7E1FF')};
`;

export const FormHeaders = styled.p`
  color: ${COLORS.black};
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 20px;
  margin-bottom: 10px;
`;
