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

import { ButtonsContainer } from './styles';

import ProductButtons from './productButtons';

export default function StoreFrontNavBar(props: {
  setFilteredProducts: (category: Product[]) => void;
  setIsClickedButton: (clicked: boolean[]) => void;
  IsClickedButton: boolean[];
  setCategoryWord: (word: string) => void;
}) {
  const {
    setFilteredProducts,
    setIsClickedButton,
    IsClickedButton,
    setCategoryWord,
  } = props;

  const [data, setData] = useState(0);
  const [isZero, setIsZero] = useState(true);
  const [buttonCategories, setButtonCategories] = useState<StorefrontButtons[]>(
    [],
  );
  const [buttonDisplay, setButtonDisplay] = useState<StorefrontButtons[]>([]);
  const [ind, setInd] = useState(0);

  const length = 4;
  // const [reachedEnd, setReachedEnd] = useState(false);
  // const [reachedStart, setReachedStart] = useState(true);

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

  const changeDisplay = (direction: number) => {
    setButtonDisplay(buttonCategories.slice(ind, ind + 4));
    const clicked = IsClickedButton;
    for (let i = 0; i < buttonDisplay.length; i += 1) {
      buttonDisplay[i].count += direction;
      if (clicked[i]) {
        clicked[i] = false;
        clicked[i + direction] = true;
      }
    }

    setIsClickedButton(clicked);
  };

  const handlePrevious = () => {
    console.log(ind > 0);
    console.log(ind);
    if (ind > 0) {
      setInd(ind - 1);
      console.log(ind);
      // setInd(newIndex < 0 ? length - 1 : newIndex);
      changeDisplay(-1);
    }
  };

  const handleNext = () => {
    if (ind + 4 < buttonCategories.length) {
      ind += 1;
      console.log(ind);
      changeDisplay(1);
    }
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
        <button onClick={handlePrevious}>P</button>
        {buttonDisplay.map((type, index) => (
          <ProductButtons
            key={type.count}
            value={type.value}
            setFiltredProducts={setFilteredProducts}
            content={type.name}
            setIsClickedButton={setIsClickedButton}
            IsClickedButton={IsClickedButton}
            setCategoryWord={setCategoryWord}
            index={index}
          />
        ))}
        <button onClick={handleNext}>Next</button>
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
