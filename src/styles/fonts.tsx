import { Public_Sans } from 'next/font/google';
import styled from 'styled-components';

const publicSansFont = Public_Sans({
  weight: '700',
  style: 'normal',
  subsets: ['latin'],
});

export const Heading1 = styled.div`
  font-family: ${publicSansFont};
  font-size: 40px;
  font-style: normal;
  line-height: normal;
`;

export const Heading4 = styled.div`
  font-family: ${publicSansFont};
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
