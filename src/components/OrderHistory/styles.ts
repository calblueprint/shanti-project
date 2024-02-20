// styles.ts
import styled from 'styled-components';
import COLORS from '../../styles/colors';

export const containerStyle = styled.div`
  width: 250px;
  height: 250px;
  margin-right: 130px;
  margin-left: 30px;
  color: ${COLORS.black};
  text-align: center;
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
