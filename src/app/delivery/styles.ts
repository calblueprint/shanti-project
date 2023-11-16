import styled from 'styled-components';
import { Public_Sans } from 'next/font/google';
import COLORS from '../../styles/colors';

const publicSans700 = Public_Sans({
  weight: '700',
  style: 'normal',
  subsets: ['latin'],
});

const publicSans400 = Public_Sans({
  weight: '700',
  style: 'normal',
  subsets: ['latin'],
});

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

export const PublicSans700Text = styled.div`
  font-family: ${publicSans700};
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const QtyText = styled.div`
  margin: 30px;
  font-family: ${publicSans400};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: right;
`;

export const ItemText = styled.div`
  font-family: ${publicSans400};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const QuantityText = styled.div`
  font-family: ${publicSans400};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: right;
`;

export const InformationContainer = styled.div`
  width: 730px;
  height: 400px;
  border: 2px solid black;
`;

export const InformationText = styled.div`
  width: 730px;
  height: 50px;
  border-radius: 4px;
  margin-top: 14px;
  margin-bottom: 14px;
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
  margin-top: 50px;
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

export const ItemQuantityContainer = styled.div`
  margin-top: 100px
  width: 300px;
  height: 152px;
  display: flex;
  flex-direction: column;
  // use overflow-y if we want to implement scroll bar
  overflow-y: auto;
  align-items: center;
  justify-content: center;
  border: 1px solid ${COLORS.neutralGrey};
`;

export const ItemQuantityRow = styled.div`
  width: 285px;
  height: 25px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const TotalContainer = styled.div`
  width: 350px;
  height: 75px;
  border-top: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OrderButton = styled.button`
  margin-top: 26px;
  width: 350px;
  height: 50px;
  flex-shrink: 0;
  align-items: center;
  background: ${COLORS.navy};
  border-radius: 8px;
  color: ${COLORS.white};
  font-family: ${publicSans700};
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
