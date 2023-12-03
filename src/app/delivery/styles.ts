import styled from 'styled-components';
import NavBar from '../../components/NavBar';
import COLORS from '../../styles/colors';

export const DeliveryContainer = styled.div`
  margin-left: 80px;
  margin-right: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const OrderSummaryText = styled.div`
  margin-top: 27px;
  margin-left: 30px;
  text-align: left;
  width: 285px;
  height: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  font-size: 30px;
`;

export const QtyText = styled.div`
  margin-top: 30px;
  margin-right: 20px;
  margin-bottom: 5px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: right;
`;

export const ItemText = styled.div`
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const QuantityText = styled.div`
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: right;
`;

export const InformationContainer = styled.div`
  width: 730px;
  height: 400px;
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
  justify-content: center;
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
  padding-top: 200px
  width: 300px;
  height: 170px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  align-items: center;
  justify-content: center;
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
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const NavBarMovedUP = styled(NavBar)`
  position: static;
`;
