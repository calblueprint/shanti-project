import styled from 'styled-components';

interface props {
  isClicked: boolean;
}

export const Button = styled.button<props>`
  background-color: ${props => (props.isClicked ? '#00507f' : '#C7E1FF')};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: transparent;
`;

export const Label = styled.p<props>`
  color: ${props => (props.isClicked ? '#00507f' : '#000')};
  text-align: center;
  font-family: 'Public Sans', sans-serif;
  padding-top: 5px;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const IndividualContainer = styled.div`
  width: 200px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ItemContainer = styled.div`
  width: 290px;
  height: 290px;
  flex-direction: row;
`;

export const ButtonsContainer = styled.div`
  margin-left: 400px;
  margin-right: 400px;
  width: 600px;
  height: 230px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 5;
`;

export const ItemButtons = styled.button`
  width: 290px;
  height: 290px;
  border: transparent;
`;

export const StorefrontWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 30px;
`;

export const StorefrontItem = styled.div`
  width: calc(25% - 40px);
  margin-bottom: 50px;
`;

export const ShopAllText = styled.h1`
  padding-top: 230px;
  padding-left: 50px;
  font-family: 'Public Sans', sans-serif;
`;
