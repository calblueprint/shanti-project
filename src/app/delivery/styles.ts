import styled from 'styled-components';
import COLORS from '../../styles/colors';

export const DeliveryContainer = styled.div`
  margin-top: 50px;
  margin-left: 80px;
  width: 1300px;
  height: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border: 2px solid black;
`;

export const InformationContainer = styled.div`
  width: 730px;
  height: 400px;
  border: 2px solid black;
`;

export const InformationText = styled.div`
  width: 700px;
  height: 50px;
  margin: 10px;
  border-radius: 4px;
  border: 1px solid ${COLORS.neutralGrey};
  background: ${COLORS.lightGrey};
  display: flex; /* Use flexbox */
  align-items: center; /* Center vertically */
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-left: 20px;
`;

export const OrderContainer = styled.div`
  width: 350px;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const OrderSummary = styled.div`
  width: 350px;
  height: 360px;
  border-radius: 8px;
  background: ${COLORS.white};
  box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.15);
  align-items: center;
`;

export const OrderButton = styled.button`
  width: 350px;
  height: 50px;
  flex-shrink: 0;
  align-items: center;
  background: ${COLORS.navy};
  border-radius: 8px;
  color: ${COLORS.white};
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
