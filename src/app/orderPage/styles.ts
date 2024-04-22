import styled from 'styled-components';

import { Heart } from 'react-feather';

import NavBar from '../../components/NavBarFolder/NavBar';

export const FavoriteDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 50px;
  margin-top: 30px;
  margin-right: 20px;
  margin-left: 40px;
  gap: 70px;
`;

export const BottomColumnDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-evenly;
  justify-content: space-around;
  width: 100%;
  margin-left: 10px;
  margin-bottom: 30px;
  gap: 20px;
`;

export const ScrollDiv = styled.div`
  overflow: scroll;
  overflow-x: hidden;
  max-width: 100%;
`;

export const ImageDiv = styled.p`
  width: 150px;
  height: 150px;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-right: 20px;
`;

export const LabelBox = styled.div`
  width: 200px;
  height: 100%;
`;

export const OutterFavoriteDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  border-radius: 10px;
  background: var(--White, #fff);
  box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.2);
  width: 800px;
  height: 700px;
  overflow: scroll;
  margin-top: 20px;
  padding-top: 15px;
  margin-left: 60px;
`;

export const BackDiv = styled.button`
  display: flex;
  flex-direction: row;
  align: center;
  color: black;
  background-color: transparent;
  border: transparent;
  margin-bottom: 25px;
  margin-top: 25px;
`;

export const OutterBox = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-bottom: 100px;
`;

export const Heading = styled.h1`
  font-family: 'Public Sans', sans-serif;
  color: black;
  margin-bottom: 0px;
  font-size: 30px;
`;

export const OutterDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 200px;
  width: 800px;
`;

export const BackButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 200px;
  margin-bottom: 50px;
  margin-top: 50px;
  margin-left: 60px;
  text-align: left;
  width: 800px;
`;

export const Backtext = styled.p`
  padding-top: 5px;
`;

export const HeartIcon = styled(Heart)`
  color: #333286;
  width: 30px;
  height: 30px;
  fill: #333286;
  margin-right: 25px;
`;

export const TransparentButton = styled.button`
  background-color: transparent;
  border: transparent;
`;

export const NavBarMovedUP = styled(NavBar)`
  position: relative;
`;

export const ProductNameDiv = styled.div`
  width: 350px;
  height: 100%;
  gap: 40px;
`;

export const ViewItem = styled.button`
  background: #1b3679;
  color: #fbfbfb;
  text-align: center;
  width: 132px;
  height: 28px;
  flex-shrink: 0;
  margin-top: 26px;
  padding-top: 3px;
  padding-right: 10px;
  padding-left: 10px;
  padding-bottom: 3px;
  border: none;
  border-radius: 5px;
  line-height: normal;
  border-radius: 14px;
`;

export const StatusButton = styled.button<{ status: string }>`
  margin-left: auto;
  margin-right: 0;
  color: black;
  text-align: center;
  max-width: 100%;
  height: 30px;
  flex-shrink: 0;
  padding-top: 3px;
  padding-right: 30px;
  padding-left: 30px;
  padding-bottom: 3px;
  display: flex;
  gap: 15px;
  flex-direction: row;
  align-items: center; /* Center vertically */
  justify-content: center;
  border: none;
  border-radius: 16.5px;
  background-color: ${props => {
    switch (props.status) {
      case 'submitted':
        return 'var(--Greyish, #E6E6E6)';
      case 'rejected':
        return 'var(--Light-Red, #FDD)';
      case 'approved':
        return 'var(--Lime-Green, #CEE8BE)';
      default:
        return 'white';
    }
  }};
`;

export const Body1Bold = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const PageDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

export const CenterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
`;

export const DetailsHeader = styled.p`
  color: var(--Navy, #1b3679);
  font-family: Public Sans, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ShippingDetailsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 10px;
  background: var(--White, #fff);
  box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.2);
  width: 467px;
  height: auto;
  max-height: 100%;
  padding: 36px 34px;
  gap: 33px;
  max-height: 100%;
  margin-top: 52px;
  margin-bottom: 30px;
  margin-right: 40px;
`;

export const RightColumnDiv = styled.div`
  display: flex;
  flex-flow: column;
  align-items: start;
  margin-left: 10px;
  width: 100%;
  margin-top: 8px;
`;

export const TextDiv1 = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 40px;
  margin-top: 20px;
`;

export const TextDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 60px;
`;

export const TextDiv2 = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 40px;
  margin-top: 5px;
  margin-bottom: 20px;
`;

export const LeftColumnDiv = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: space-evenly;
  width: 100%;
`;
