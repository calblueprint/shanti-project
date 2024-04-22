// styles.ts
import styled from 'styled-components';
import { X, Check, Send, Loader } from 'react-feather';
import COLORS from '../../styles/colors';

export const containerStyle = styled.div`
  width: 250px; // This width might be too small if it's meant to contain the OrderDiv
  height: 250px;
  margin-right: auto; // Center the container if that's the intention
  margin-left: auto; // Center the container if that's the intention
  color: ${COLORS.black};
  font-family: Public Sans;
  font-size: 20px;
  font-style: normal;
  line-height: normal;
`;

export const imageGalleryStyle = {
  display: 'flex',
  overflowX: 'auto',
  gap: '10px',
  // Add more styles as needed
};

export const viewButtonStyle = {
  marginTop: '10px',
  backgroundColor: 'blue',
  color: 'white',
  padding: '10px 20px',
  cursor: 'pointer',
  // Add more styles as needed
};

export const ViewOrderButton = styled.button`
  overflow: hidden;
  color: var(--Black, #101010);
  text-align: right;
  text-overflow: ellipsis;
  line-height: normal;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover {
    text-decoration: underline;
  }
`;

export const ArrowIcon = styled.div`
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid var(--Black, #101010);
  margin-left: 5px;
`;

export const OrderDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between; // Changed to space-between to align items to the edges
  width: 100%;
  margin-bottom: 50px;
  margin-top: 30px;
  padding-left: 30px; // Adjust as necessary to align with the left edge
  padding-right: 130px; // Adjust as necessary to align with the right edge
`;

export const OrderApproved = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center; /* Assuming you want the checkmark and text to be at the start */
  background-color: #cee8be; /* Or the exact color from the image */
  color: white;
  color: var(--Black, #101010);
  font-family: 'Public Sans';
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  border-radius: 20px; /* Adjust for the exact curvature you want */
  gap: 14px; /* Space between the checkmark and text */
  width: 245px;
  margin-top: 18px;
  padding-left: 10px; /* Adjust as necessary to align with the left edge */
  padding-right: 10px; /* Adjust as necessary to align with the right edge */
  padding-top: 5px; /* Adjust as necessary to align with the top edge */
  padding-bottom: 5px; /* Adjust as necessary to align with the bottom edge */
`;

export const OrderReject = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center; /* Assuming you want the checkmark and text to be at the start */
  background-color: #fdd; /* Or the exact color from the image */
  color: white;
  color: var(--Black, #101010);
  font-family: 'Public Sans';
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  border-radius: 20px; /* Adjust for the exact curvature you want */
  gap: 14px; /* Space between the checkmark and text */
  width: 245px;
  margin-top: 18px;
  padding-left: 10px; /* Adjust as necessary to align with the left edge */
  padding-right: 10px; /* Adjust as necessary to align with the right edge */
  padding-top: 5px; /* Adjust as necessary to align with the top edge */
  padding-bottom: 5px; /* Adjust as necessary to align with the bottom edge */
`;

export const OrderReady = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center; /* Assuming you want the checkmark and text to be at the start */
  background-color: #fdd; /* Or the exact color from the image */
  color: white;
  color: var(--Black, #101010);
  font-family: 'Public Sans';
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  border-radius: 20px; /* Adjust for the exact curvature you want */
  gap: 14px; /* Space between the checkmark and text */
  width: 245px;
  margin-top: 18px;
  padding-left: 10px; /* Adjust as necessary to align with the left edge */
  padding-right: 10px; /* Adjust as necessary to align with the right edge */
  padding-top: 5px; /* Adjust as necessary to align with the top edge */
  padding-bottom: 5px; /* Adjust as necessary to align with the bottom edge */
`;

export const GalleryContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 10px;
  padding: 10px;
`;

export const ImageContainer = styled.div`
  flex: 0 0 auto;
  background-color: var(--Greyish, #e6e6e6);
  width: 124px;
  height: 124px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GalleryImage = styled.img`
  height: 115px;
  width: 115px;
  display: block;
`;

export const RowDiv = styled.div`
  width: 700px;
<<<<<<< HEAD
  height: 300px;
  margin-bottom: 20px;
=======
  height: 400px;
  margin-bottom: 20px;
  margin-top: 20px;
<<<<<<< HEAD
>>>>>>> b287da7 (temp)
=======
>>>>>>> b287da7 (temp)
`;

export const OrderStatusDiv = styled.div`
  width: 300px;
  height: 35px;
  background: var(--Light-Red, #fdd);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-top: 15px;
`;

export const OrderStatusApprovedDiv = styled.div`
  width: 300px;
  height: 35px;
  background: var(--Lime-Green, #cee8be);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-top: 15px;
`;

export const OrderStatusSubmittedDiv = styled.div`
  width: 300px;
  height: 35px;
  background: var(--Greyish, #E6E6E6);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-top: 15px;
`;

export const CrossStyled = styled(X)`
  stroke-width: 5px;
  margin-right: 10px;
`;

export const CheckStyled = styled(Check)`
  stroke-width: 5px;
  margin-right: 10px;
`;

export const SendStyle = styled(Send)`
  stroke-width: 3px;
  margin-right: 10px;
`;
