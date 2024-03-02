import { EyeOff, Eye } from 'react-feather';
import styled from 'styled-components';
import COLORS from '../../styles/colors';

export const Input1 = styled.input<{ $pickColor?: boolean }>`
  color: ${props => (props.$pickColor ? '#203354' : 'black')};
  background: ${props => (props.$pickColor ? '#ADD8E6' : '#FFFFFF')};
  stroke-width: 1px;
  width: 420px;
  height: 40px;
  padding-left: 10px;
  border-color: ${COLORS.black};
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

export const Input = styled.input<{
  $pickColor?: boolean;
  $wrongLogin?: boolean;
}>`
  &:focus {
<<<<<<< HEAD
    border: 1.5px solid #1b3679;
=======
    border: 2px solid #1b3679;
>>>>>>> a896ffce653abaaa278ecd02f5ab0d9ba699dc93
    background: #f5fbff;
    outline: none;
    color: #1b3679;
  }
  stroke-width: 1px;
  color: #000000;
  border: 1.5px solid ${props => (props.$wrongLogin ? '#B60000' : 'black')};
  background: ${props => (props.$pickColor ? '#ffdddd' : 'white')};
  width: 420px;
  height: 40px;
  padding-left: 10px;
`;
<<<<<<< HEAD

export const wrong = styled.div`
  color: red;
  background: pink;
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
=======
>>>>>>> a896ffce653abaaa278ecd02f5ab0d9ba699dc93
