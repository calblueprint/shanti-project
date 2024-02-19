import styled from 'styled-components';
import Image from 'next/image';
import COLORS from '../../styles/colors';

export const ViewAllDiv = styled.button`
  display: flex;
  align-items: center;
  color: ${COLORS.black};
  background-color: transparent;
  border: transparent;
`;

export const ImageWithSize = styled(Image)`
    width={23}
    height={23}

`;
