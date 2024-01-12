import styled from 'styled-components';
import Image from 'next/image';
import COLORS from '../../styles/colors';

export const BackDiv = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${COLORS.black};
  background-color: transparent;
  border: transparent;
  margin-left: 0px;
  margin-top: 55px;
`;

export const ImageWithSize = styled(Image)`
    width={23}
    height={23}

`;
