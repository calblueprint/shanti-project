import styled from 'styled-components';
import NavBar from '../../components/NavBarFolder/NavBar';
import COLORS from '../../styles/colors';

export const DeliveryContainer = styled.div`
  margin-left: 80px;
  margin-right: 80px;
  margin-bottom: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const OutterBox = styled.div`
  display: flex;
  flex-direction: column;
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



export const OrderContainer = styled.div`
  margin-top: 50px;
  width: 350px;
  height: 500px;
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
  font-family: 'Public Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const NavBarMovedUP = styled(NavBar)`
  position: static;
`;

export const BackButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  width: 800px;
  margin-left: 40px;
`;

export const OutterDiv = styled.div`
  display: flex;
  flex-direction: column;
`;


export const InformationContainer = styled.div`
  width: 629px;
  height: 327px;
  margin: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  background: ${COLORS.white}; /* Assuming white is defined in your COLORS */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  padding: 20px 25px;

`;

export const InformationField = styled.div`
  width: 100%;
  margin-top: 14px;
  margin-bottom: 14px;
  display: flex;
  align-items: center;
`;

export const Label = styled.div`
  color: var(--Black, #101010);
  font-family: "Public Sans";
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-right: 20px; /* Space between label and input */
`;

export const Input = styled.div`
  width: calc(100% - 40px); /* Subtracting padding */
  height: 50px;
  border-radius: 4px;
  padding-left: 20px;
  font-size: 20px;
  color: var(--Black, #101010);

  /* Body 1 - Text */
  font-family: "Public Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  `;

  export const Heading4Bold = styled.p`
  font-family: 'Public Sans', sans-serif;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;


export const ForceColumnDiv = styled.div`
  display: flex;
  flex-flow: column;
  margin-left: 50px;
`;