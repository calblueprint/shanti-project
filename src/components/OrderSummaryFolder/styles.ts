import COLORS from '@/styles/colors';
import styled from 'styled-components';

// export const OrderSummaryDiv = styled.div`
//   overflow: scroll;
//   width: 350px;
//   height: 300px;
// `;

// export const ItemSummaryDiv = styled.div`
//   display: flex;
//   flex-direction: row;
//   margin-bottom: 20px;
//   justify-content: space-between;
//   padding-left: 10px;
//   padding-right: 10px;
// `;

// export const OrderTotalDiv = styled.div`
//   height: 50px;
//   padding-top: 10px;
//   width: 350px;
//   padding-left: 0px;
//   border-top: 1px black solid;
//   display: flex;
//   flex-flow: row;
//   justify-content: space-between;
// `;

// export const Qty = styled.p`
//   width: 100%;
//   padding-left: 290px;
// `;

// export const HeaderShiftRight = styled.h2`
//   margin-right: 30px;
// `;

// export const PShiftRight = styled.p`
//   margin-right: 30px;
// `;

// export const HeaderShiftLeft = styled.h2`
//   margin-left: 15px;
// `;

// export const PShiftLeft = styled.p`
//   margin-left: 15px;
// `;


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
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 0;
`;

export const OrderTableBody = styled.tbody`
  overflow: auto;
  display: block;
  flex-grow: 1;
  min-height: 0;
`;

export const WhiteBackgroundDiv = styled.div`
  min-height: 0;
  background: ${COLORS.white};
  padding: 24px;
  padding-bottom: 0px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex-grow: 1;
  overflow: hidden;
`;
