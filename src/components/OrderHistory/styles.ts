// styles.ts
import styled from 'styled-components';
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
  font-family: 'Public Sans', sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const ArrowIcon = styled.img`
  margin-left: 5px;
  width: 16px; // Set width as needed
  height: 16px; // Set height as needed
  // No need to set color since it's an img element
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
  max-height: 115px;
  max-width: 115px;
  display: block;
`;