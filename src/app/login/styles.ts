import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background:white;
  }
`;
export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 420px;
  margin-left: 650px;
  margin-top: 120px;
  border: 1px solid #b3b3b3;
`;

export const LoginContent = styled.div`
  margin-left: 40px;
  margin-top: 30px;
`;

export const Button = styled.button`
  margin-top: 40px;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 420px;
  height: 40px;
  border-radius: 8px;
  background: #000;
  border: transparent;
`;

export const WelcomeSign = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  background: #d9d9d9;
  border: transparent;
  width: 420px;
  height: 40px;
  padding-left: 10px;
`;

export const FormHeaders = styled.p`
  color: #000;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const Fullscreen = styled.div`
  width: 100 %;
  height: 100 %;
`;
export const Img = styled.div`
  background-color: yellow;
  align-self: flex - start;
  justify-self: flex - start;
  height: 50px;
  width: 110px;
  margin: 20px;
`;
