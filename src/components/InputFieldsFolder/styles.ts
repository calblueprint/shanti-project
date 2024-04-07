import { EyeOff, Eye } from 'react-feather';
import styled from 'styled-components';
import COLORS from '../../styles/colors';

export const Input1 = styled.input<{ $pickColor?: boolean }>`
  color: ${props => (props.$pickColor ? '#203354' : COLORS.black)};
  background: ${props => (props.$pickColor ? '#ADD8E6' : COLORS.white)};
  stroke-width: 1px;
  width: 420px;
  height: 40px;
  padding-left: 10px;
  border-color: ${COLORS.black};
`;

export const FormHeaders = styled.div`
  color: ${COLORS.black};
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const Input = styled.input<{
  $pickColor?: boolean;
  $wrongLogin?: boolean;
}>`
  &:focus {
    border: 1.5px solid ${COLORS.navy};
    background: ${COLORS.skyBlue};
    outline: none;
    color: ${COLORS.navy};
  }
  stroke-width: 1px;
  color: ${COLORS.black};
  border: 1.5px solid
    ${props => (props.$wrongLogin ? COLORS.darkRed : COLORS.black)};
  background: ${props => (props.$pickColor ? COLORS.lightRed : COLORS.white)};
  width: 420px;
  height: 40px;
  padding-left: 10px;
`;

export const EyeOffIcon = styled(EyeOff)`
  stroke-width: 1.5;
  width: 20px;
  height: 20px;
  color: black;
  margin: 20px 20px 20px 20px;
`;

export const EyeIcon = styled(Eye)`
  stroke-width: 1.5;
  width: 20px;
  height: 20px;
  color: black;
  margin: 20px 20px 20px 20px;
`;
