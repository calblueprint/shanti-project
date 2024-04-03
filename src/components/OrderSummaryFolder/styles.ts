import COLORS from '@/styles/colors';
import styled from 'styled-components';

export const OrderSummaryDiv = styled.div`
  overflow: scroll;
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ItemSummaryDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  justify-content: space-between;
`;

export const OrderTotalDiv = styled.div`
  height: 50px;
  padding-top: 5px;
  width: 100%;
  border-top: 1px black solid;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
`;

export const Qty = styled.p`
  width: 100%;
`;

export const WhiteBackgroundDiv = styled.div`
  background: ${COLORS.white};
  padding: 24px;
  padding-bottom: 0px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const HeaderShiftRight = styled.h2`
  margin-right: 30px;
`;

export const PShiftRight = styled.p`
  margin-right: 30px;
`;

export const PShiftLeft = styled.p`
  margin-left: 15px;
`;


export const ContainerDiv = styled.div`
  width: 350px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
  box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const TotalDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 16px;
  background-color: ${COLORS.lightGrey};
`;

export const OrderRow = styled.tr`
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const OrderTable = styled.table`
  width: 100%;
  max-height: 200px;
`;

export const OrderTableBody = styled.tbody`
  overflow: scroll;
`;
