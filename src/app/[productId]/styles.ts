import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { Body3 } from '@/styles/fonts';
import { Heart } from 'react-feather';
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

export const TopRightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 440px;
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

export const HeartIcon = styled(Heart)<{ $favorited: boolean }>`
  width: 30px;
  height: 30px;
  color: ${props => (props.$favorited ? COLORS.marineBlue : COLORS.black)};
  fill: ${props => (props.$favorited ? COLORS.marineBlue : 'none')};
  position: relative;
`;

export const HeartContainer = styled.button`
  right: 16px;
  top: 16px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const FavoritePopup = styled.div`
  position: absolute;
  visibility: hidden;
  width: 150px;
  border-radius: 8px;
  padding: 8px;
  // Find better way to refactor this, it shouldn't need a calc
  transform: translate(calc(-50% + 15px), -40px);
  z-index: 1;

  color: ${COLORS.black};
  background: ${COLORS.lightPeriwinkle};
  box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.2);

  ${Body3} {
    display: inline;
  }

  ${HeartContainer}:hover & {
    visibility: visible;
  }
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
