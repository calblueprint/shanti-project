import styled from 'styled-components';
import COLORS from '../../styles/colors';

export const BackButton = styled.button`
  padding-top: 210px;
  padding-left: 30px;
  width: 70px;
  height: 40px;
  background-color: transparent;
  border-color: transparent;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  margin: 50px;
  width: 1440px;
  height: 800px;
`;

export const ImageContainer = styled.div`
  margin: 50px;
  width: 666px;
  height: 666px;
  flex-shrink: 0;
`;

export const TextContainer = styled.div`
  margin-left: 70px;
  width: 440px;
  height: 350px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 450px;
  height: 50px;
  border-radius: 30px;
  padding: 30px;
`;

export const QuantityButton = styled.button`
  width: 165px;
  height: 50px;
  border-radius: 8px;
  background-color: ${COLORS.white};
  border-color: ${COLORS.navy};
  font-family: Public Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: ${COLORS.navy};
`;
export const AddToCartButton = styled.button`
  width: 265px;
  height: 50px;
  border-radius: 8px;
  background-color: ${COLORS.navy};
  font-family: Public Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: ${COLORS.white};
  border-color: transparent;
`;
