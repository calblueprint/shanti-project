import { EyeOff, Eye } from 'react-feather';
import styled from 'styled-components';
import COLORS from '../../styles/colors';

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 500px;
  height: 420px;
  margin-left: 520px;
  margin-top: 120px;
  border: 1px solid #b3b3b3;
`;

export const LoginContent = styled.div`
  margin-left: 40px;
  flex-direction: column;
  margin-top: 30px;
  text-color: black;
`;

export const Button = styled.button`
  color: ${COLORS.white};
  text-align: center;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: 420px;
  height: 40px;
  border-radius: 8px;
  background: ${COLORS.navy};
  border: transparent;
  z-index: 1;
`;

export const WelcomeSign = styled.div`
  color: ${COLORS.navy};
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-bottom: 10px;
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

export const ErrorMessage = styled.div`
  transform: translateY(-250%);
  margin-bottom: 20px;
  width: 420px;
  color: ${COLORS.darkRed};
  text-align: left;
  font-size: 13px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  z-index: 0;
  position: fixed;
`;

export const EyeOffIcon = styled(EyeOff)`
  stroke-width: 1.5;
  width: 20px;
  height: 20px;
  color: black;
  margin: 20px 20px 20px 20px;
  transform: translateY(-250%) translateX(1800%);
`;

export const EyeIcon = styled(Eye)`
  stroke-width: 1.5;
  width: 20px;
  height: 20px;
  color: black;
  margin: 20px 20px 20px 20px;
  transform: translateY(-250%) translateX(1800%);
`;

export const Fullscreen = styled.div`
  width: 1440px;
  height: 800px;
`;

export const InputField = styled.div`
  position: relative;
`;
