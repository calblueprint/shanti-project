import styled from 'styled-components';
import { ArrowUpRight, Facebook, Instagram, Youtube } from 'react-feather';
import COLORS from '../../styles/colors';

export const Heading = styled.h1`
  font-family: 'Public Sans', sans-serif;
  color: black;
  font-size: 40px;
`;

export const ContactDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  marginright: 90px;
  marginleft: 90px;
  gap: 18px;
`;

export const LinkDiv = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 60px;
  marginright: 90px;
  marginleft: 90px;
`;

export const Body1Bold = styled.p`
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Body1New = styled.p`
  font-weight: 350;
  font-size: 20px;
  font-style: normal;
  line-height: normal;
`;

export const Body2New = styled.p`
  font-size: 15px;
  font-style: normal;
  line-height: normal;
`;

export const MissionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  marginleft: 90px;
  marginright: 90px;
  gap: 10px;
`;

export const WordDiv = styled.div`
  gap: 0px;
`;

export const WordDiv1 = styled.div`
  gap: 0px;
  display: flex;
  flex-direction: row;
`;

export const Heading1Bold = styled.div`
  font-family: 'Public Sans';
  font-size: 40px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

export const ArrowUpRightIcon = styled(ArrowUpRight)`
  stroke-width: 1.5;
  width: 20px;
  height: 20px;
`;

export const YoutubeIcon = styled(Youtube)`
  stroke-width: 1.5;
  width: 33px;
  height: 33px;
`;

export const FacebookIcon = styled(Facebook)`
  stroke-width: 1.5;
  width: 33px;
  height: 33px;
`;

export const InstagramIcon = styled(Instagram)`
  stroke-width: 1.5;
  width: 33px;
  height: 33px;
`;

export const FooterDiv = styled.div`
  font-family: 'Public Sans';
  color: ${COLORS.black};
  border-top: 2px solid ${COLORS.black};
  display: flex;
  width: 1440px;
  height: 288px;
  padding: 48px 88px;
  justify-content: center;
  align-items: center;
  gap: 90px;
`;

export const SVGWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const Wrapper = styled.div`
  min-height: 100%; /*or 100vh */
  position: relative;
  background: var(--Light-Periwinkle, #f4f7ff);
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 25px;
  padding-bottom: 25px;
  padding-right: 10px;
  padding-left: 10px;
  gap: 50px;
`;

export const LocationDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 250px;
  margin-right: 60px;
  color: ${COLORS.black};
  font-family: Public Sans;
  font-style: normal;
  line-height: normal;
`;

export const MySpan = styled.span`
  &:hover {
    text-decoration: underline;
  }
`;

export const MySpanIcon = styled.span`
  :hover {
    stroke-width: 2;
  }
`;
