import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { fetchButtonCategories } from '@/api/supabase/queries/button_queries';
import { Body2 } from '@/styles/fonts';
import { totalNumberOfItemsInCart } from '../../api/supabase/queries/cart_queries';

import {
  NavBarComp,
  ButtonsDiv,
  CartTotalCircle,
  UserProfileIcon,
  ShoppingCartIcon,
  IconWithLabelLink,
} from '../../components/NavBarFolder/styles';

import { Product, StorefrontButtons } from '../../schema/schema';

import {
  ButtonsContainer,
  FrontButton,
  BackButton,
  FrontArrow,
  BackArrow,
} from './styles';

import ProductButtons from './productButtons';

export default function StoreFrontNavBar(props: {
  setFilteredProducts: (category: Product[]) => void;
  setCategoryWord: (word: string) => void;
  clickedButton: number;
  setClickedButton: (clicked: number) => void;
}) {
  const {
    setFilteredProducts,
    setCategoryWord,
    setClickedButton,
    clickedButton,
  } = props;

  const [data, setData] = useState(0);
  const [isZero, setIsZero] = useState(true);
  const [buttonCategories, setButtonCategories] = useState<StorefrontButtons[]>(
    [],
  );
  const [buttonDisplay, setButtonDisplay] = useState<StorefrontButtons[]>([]);
  const [ind, setInd] = useState(0);
  let newInd = 0;
  const reachedSt = true;
  const reachedE = false;
  const [reachedStart, setReachedStart] = useState(false);
  const [reachedEnd, setReachedEnd] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setData(await totalNumberOfItemsInCart());
    };
    fetchData();
  }, []);

  useEffect(() => {
    const changeData = async () => {
      if (data > 0) {
        setIsZero(false);
      }
    };
    changeData();
  }, [data]);

  useEffect(() => {
    const fetchButtonCat = async () => {
      setButtonCategories(await fetchButtonCategories());
    };
    fetchButtonCat();
  }, []);

  useEffect(() => {
    const displayedButtons = async () => {
      const button = await fetchButtonCategories();
      setButtonDisplay(button.slice(0, 4));
    };
    displayedButtons();
  }, []);

  const changeDisplay = (direction: number, index: number) => {
    setButtonDisplay(buttonCategories.slice(index, index + 4));
  };

  const handlePrevious = () => {
    if (ind > 0) {
      if (ind % 4 !== 0) {
        newInd = 4 * (Math.floor(buttonCategories.length / 4) - 1);
      } else {
        newInd = ind - 4;
      }
      setInd(newInd);
      changeDisplay(-1, newInd);
      setReachedStart(!(newInd === 0));
    }
    setReachedEnd(true);
  };

  const handleNext = () => {
    if (ind + 4 < buttonCategories.length) {
      const remainder = buttonCategories.length - ind - 4;
      if (remainder < 4) {
        newInd = buttonCategories.length - 4;
      } else {
        newInd = ind + 4;
      }
      setInd(newInd);
      changeDisplay(1, newInd);
    }
    setReachedEnd(newInd + 5 <= buttonCategories.length);
    setReachedStart(true);
  };

  return (
    <NavBarComp>
      <IconWithLabelLink href="../storefront">
        <Image
          src="/images/ShantiLogo.png"
          alt="Shanti Logo"
          width={125}
          height={70}
        />
      </IconWithLabelLink>
      <ButtonsContainer>
        <FrontButton onClick={handlePrevious} $reachedStart={reachedStart}>
          <FrontArrow />
        </FrontButton>
        {buttonDisplay.map((type, index) => (
          <ProductButtons
            key={type.id - 1}
            value={type.name}
            setFiltredProducts={setFilteredProducts}
            content={type.name}
            setCategoryWord={setCategoryWord}
            index={index + ind}
            setClickedButton={setClickedButton}
            clickedButton={clickedButton}
          />
        ))}
        <BackButton onClick={handleNext} $reachedEnd={reachedEnd}>
          <BackArrow />
        </BackButton>
      </ButtonsContainer>

      <ButtonsDiv>
        <IconWithLabelLink href="../profileScreen">
          <UserProfileIcon />
          <Body2>User</Body2>
        </IconWithLabelLink>
        <IconWithLabelLink href="../cart">
          <ShoppingCartIcon />
          <Body2>Cart</Body2>
          <CartTotalCircle $isZero={isZero}>{data}</CartTotalCircle>
        </IconWithLabelLink>
      </ButtonsDiv>
    </NavBarComp>
  );
}
