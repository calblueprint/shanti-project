import styled from 'styled-components';
import COLORS from '../../styles/colors';

export const ContactDiv = styled.div`
  width: 250px;
  height: 250px;
  margin-right: 130px;
  margin-left: 30px;
  color: ${COLORS.black};
  text-align: center;
  font-family: Public Sans;
  font-size: 20px;
  font-style: normal;
  line-height: normal;
`;

export const FooterDiv = styled.div`
  display: flex;
  flex-direction: row;
  color: ${COLORS.black};
  width: 1650px;
  padding-left: 10px;
  padding-top: 40px;
  margin-left: 70px;
  border-top: 2px solid ${COLORS.black};
  height: 200px;
`;
