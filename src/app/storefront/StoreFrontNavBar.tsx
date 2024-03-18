/* eslint-disable react/button-has-type */
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { fetchButoonCategories } from '@/api/supabase/queries/button_queries';
import { totalNumberOfItemsInCart } from '../../api/supabase/queries/cart_queries';

import {
  NavBarComp,
  ButtonsDiv,
  CartTotalCircle,
  UserProfileIcon,
  ShoppingCartIcon,
} from '../../components/NavBarFolder/styles';

import { Product, StorefrontButtons } from '../../schema/schema';

import {
  ButtonsContainer,
  FrontButton,
  BackButton,
  Front,
  Back,
} from './styles';

import ProductButtons from './productButtons';

export default function StoreFrontNavBar(props: {
  setFilteredProducts: (category: Product[]) => void;
  setIsClickedButton: (clicked: boolean[]) => void;
  IsClickedButton: boolean[];
  setCategoryWord: (word: string) => void;
  clickedButton: number;
  setClickedButton: (clicked: number) => void;
}) {
  const {
    setFilteredProducts,
    setIsClickedButton,
    IsClickedButton,
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
      setButtonCategories(await fetchButoonCategories());
    };
    fetchButtonCat();
  }, []);

  useEffect(() => {
    const displayedButtons = async () => {
      const button = await fetchButoonCategories();
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
    setReachedEnd(ind + 5 < buttonCategories.length);
    setReachedStart(true);
  };

  return (
    <NavBarComp>
      <Link href="../storefront">
        <Image
          src="/images/ShantiLogo.png"
          alt="Shanti Logo"
          width={147}
          height={73}
        />
      </Link>
      <ButtonsContainer>
        <FrontButton onClick={handlePrevious} $reachedStart={reachedStart}>
          <Front />
        </FrontButton>
        {buttonDisplay.map((type, index) => (
          <ProductButtons
            key={type.id}
            value={type.value}
            setFiltredProducts={setFilteredProducts}
            content={type.name}
            setIsClickedButton={setIsClickedButton}
            IsClickedButton={IsClickedButton}
            setCategoryWord={setCategoryWord}
            index={index + ind}
            setClickedButton={setClickedButton}
            clickedButton={clickedButton}
          />
        ))}
        <BackButton onClick={handleNext} $reachedEnd={reachedEnd}>
          <Back />
        </BackButton>
      </ButtonsContainer>

      <ButtonsDiv>
        <Link href="../profileScreen">
          <UserProfileIcon />
          <p>Users</p>
        </Link>
        <Link href="../cart">
          <ShoppingCartIcon />
          <p>Cart</p>
          <CartTotalCircle $isZero={isZero}>{data}</CartTotalCircle>
        </Link>
      </ButtonsDiv>
    </NavBarComp>
  );
}
