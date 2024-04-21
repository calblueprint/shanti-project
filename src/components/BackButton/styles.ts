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
  width: 60px;
<<<<<<< HEAD
>>>>>>> b287da7 (temp)
=======
  width: 60px;
>>>>>>> b287da7 (temp)
=======
>>>>>>> 46a8b03 (fixed after rebasing)
  &:hover {
    text-decoration: underline;
  }
`;

export const ArrowLeftIcon = styled(ArrowLeft)`
  width: 18px;
  height: 18px;
<<<<<<< HEAD
>>>>>>> b287da7 (temp)
=======
  width: 18px;
  height: 18px;
>>>>>>> b287da7 (temp)
=======
>>>>>>> 46a8b03 (fixed after rebasing)
`;
