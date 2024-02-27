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

export const Input = styled.input`
  &:focus {
    border: 2px solid #1B3679;
    background: #F5FBFF;
    outline: none;
    color: #1B3679;
  }
  background: ${COLORS.white};
  color: ${COLORS.black};
  width: 420px;
  height: 40px;
  padding-left: 10px;
`;