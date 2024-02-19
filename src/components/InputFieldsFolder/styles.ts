import styled from 'styled-components';
import COLORS from '../../styles/colors';

export const Input = styled.input`
  background: ${COLORS.white};
  stroke-width: 1px;
  color: ${COLORS.black};
  stroke: ${COLORS.navy};
  width: 420px;
  height: 40px;
  padding-left: 10px;
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
