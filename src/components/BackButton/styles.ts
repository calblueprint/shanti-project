import styled from 'styled-components';
import { ArrowLeft } from 'react-feather';
import Link from 'next/link';
import COLORS from '../../styles/colors';

export const BackLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: ${COLORS.black};
<<<<<<< HEAD
<<<<<<< HEAD
  width: 75px;

=======
  width: 60px;
>>>>>>> b287da7 (temp)
=======
  width: 60px;
>>>>>>> b287da7 (temp)
  &:hover {
    text-decoration: underline;
  }
`;

export const ArrowLeftIcon = styled(ArrowLeft)`
<<<<<<< HEAD
<<<<<<< HEAD
  width: 20px;
  height: 20px;
=======
  width: 18px;
  height: 18px;
>>>>>>> b287da7 (temp)
=======
  width: 18px;
  height: 18px;
>>>>>>> b287da7 (temp)
`;
