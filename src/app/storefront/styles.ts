import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background:white;
  }
`;

export const Button = styled.button`
  margin: 10px;
  color: black;
  text-align: center;
  font-family: sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  width: 50px;
  height: 50px;
  background: transparent;
  border: transparent;
  float: right;
`;
