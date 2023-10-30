import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background:white;
  }
`;

export const NavBarComp = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
  height: 180px;
  padding-top: 20px;
  width: 100%;
  background: var(--Light-Periwinkle, #f4f7ff);
  box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.1);
`;

export const ButtonsDiv = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 15px;
`;

export const LocationDiv = styled.div`
  display: flex;
  flex-direction: column;

  width: 300px;
  height: 250px;
  margin-right: 60px;

  color: var(--Black, #101010);

  font-family: Public Sans;
  font-style: normal;
  line-height: normal;
`;

export const ContactDiv = styled.div`
  width: 250px;
  height: 250px;
  margin-right: 130px;
  margin-left: 30px;
  color: var(--Black, #101010);
  text-align: center;
  font-family: Public Sans;
  font-size: 20px;
  font-style: normal;
  line-height: normal;
`;

export const FooterDiv = styled.div`
  display: flex;
  flex-direction: row;
  color: black;
  width: 90%;
  padding-left: 10px;
  padding-top: 40px;
  margin-left: 70px;
  border-top: 2px solid black;

  height: 200px;
`;

export const Addie = styled.p`
  margin-top: 30px;
  margin-bottom: 30px;
`;
