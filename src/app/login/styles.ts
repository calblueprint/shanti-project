import { EyeOff, Eye } from 'react-feather';
import styled from 'styled-components';
import COLORS from '../../styles/colors';

export const LoginBox = styled.div`
  display: flex;
  width: 500px;
  height: 420px;
  justify-self: center;
  align-self: center;
  background-color: ${COLORS.white};
  box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

export const LoginContent = styled.div`
  margin-left: 40px;
  flex-direction: column;
  align-self: center;
  justify-self: center;
  text-color: ${COLORS.black};
`;

export const Button = styled.button`
  color: ${COLORS.white};
  width: 420px;
  height: 40px;
  border-radius: 8px;
  background: ${COLORS.navy};
  border: transparent;
`;

export const WelcomeSign = styled.div`
  color: ${COLORS.navy};
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
  position: absolute;
`;

export const EyeOffIcon = styled(EyeOff)`
  stroke-width: 1.5;
  width: 20px;
  height: 20px;
  color: ${COLORS.black};
  margin: 20px;
  transform: translateY(-250%) translateX(1800%);
`;

export const EyeIcon = styled(Eye)`
  stroke-width: 1.5;
  width: 20px;
  height: 20px;
  color: ${COLORS.black};
  margin: 20px;
  transform: translateY(-250%) translateX(1800%);
`;

export const Fullscreen = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  background-color: ${COLORS.lightGrey};
`;

export const InputField = styled.div`
  position: relative;
  background-color: ${COLORS.lightGrey};
`;
