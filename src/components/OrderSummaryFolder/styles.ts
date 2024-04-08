import styled from 'styled-components';

export const OrderSummaryDiv = styled.div`
  overflow: scroll;
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
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
  border-radius: 8px;
  background: var(--White, #fff);
  height: 455px;
  width: 350px;
  padding: 20px;
  box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.1);
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

export const OrderSummaryHeaderDiv = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const ItemNameDiv = styled.div`
  width: 200px;
  overflow: hidden;
`;

export const AlignItemCenter = styled.div`
  margin-left: 10px;
  margin-top: 10px;
`;
