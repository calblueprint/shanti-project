import styled from 'styled-components';
import { ArrowLeft } from 'react-feather';
import Image from 'next/image';
import COLORS from '../../styles/colors';

export const BackDiv = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${COLORS.black};
  background-color: transparent;
  border: transparent;
  margin-left: 2%;
  margin-top: 55px;
  gap: 5px;
`;

export const ImageWithSize = styled(Image)`
    width={23}
    height={23}
`;

export const ArrowLeftIcon = styled(ArrowLeft)`
  width: 17px;
  height: 17px;
`;
