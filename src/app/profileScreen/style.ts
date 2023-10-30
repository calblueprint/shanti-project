import styled, { createGlobalStyle } from 'styled-components';

import { ToastContainer } from 'react-toastify';

export const GlobalStyle = createGlobalStyle`
  body {
    background:white;
  }
`;

export const LogOutButton = styled.button`
  background: #00507f;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: transparent;
  border-radius: 5px;
  width: 300px;
  height: 50px;
`;

export const PopUp = styled(ToastContainer)`
  transform: translate(-150px, 250px);
`;
