import styled from 'styled-components';

export const OrderSummaryDiv = styled.div`
  overflow: scroll;
  width: 350px;
  height: 300px;
`;

export const ItemSummaryDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
`;

export const OrderTotalDiv = styled.div`
  height: 50px;
  padding-top: 10px;
  width: 350px;
  padding-left: 0px;
  border-top: 1px black solid;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
`;

export const Qty = styled.p`
  width: 100%;
  padding-left: 290px;
`;

export const WhiteBackgroundDiv = styled.div`
  border-radius: 8px;
  background: var(--White, #fff);
  height: 430px;
  width: 350px;
  padding-top: 20px;

  box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.1);
`;

export const HeaderShiftRight = styled.h2`
  margin-right: 30px;
`;

export const PShiftRight = styled.p`
  margin-right: 30px;
`;

export const HeaderShiftLeft = styled.h2`
  margin-left: 15px;
`;

export const PShiftLeft = styled.p`
  margin-left: 15px;
`;
