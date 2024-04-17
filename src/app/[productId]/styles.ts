import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import COLORS from '../../styles/colors';


export const LeftColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  margin-top: 50px;
  width: 1440px;
  height: 400px;
  justify-content: space-around;
  align-self: center;
  justify-self: center;
`;

export const ImageContainer = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background-color: ${COLORS.lightGrey};
`;

export const TextContainer = styled.div`
  width: 440px;
  height: 350px;
  margin-top: 41px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 450px;
  height: 50px;
  margin-top: 40px;
`;

export const QuantityButton = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 165px;
  height: 50px;
  border-radius: 8px;
  background-color: ${COLORS.white};
  border: 2px solid ${COLORS.navy};
  color: ${COLORS.navy};
`;

export const PlusMinusButton = styled.button`
  width: 25px;
  height: 25px;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-color: transparent;
  font-size: 20px;
  color: ${COLORS.navy};
`;
export const AddToCartButton = styled.button`
  width: 265px;
  height: 50px;
  border-radius: 8px;
  background-color: ${COLORS.navy};
  font-family: 'Public Sans', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: ${COLORS.white};
  border-color: transparent;
`;

export const ToastPopUP = styled(ToastContainer)`
  position: fixed;
  z-index: 100;
  transform: translatey(90px);
`;

export const Fullscreen = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
`;
