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

import { ButtonsContainer,
  FrontButton,
  BackButton,
  Front,
  Back
 } from './styles';

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
  const [buttonCategories, setButtonCategories] = useState<StorefrontButtons[]>([]);
  const [buttonDisplay, setButtonDisplay] = useState<StorefrontButtons[]>([]);
  const [ind, setInd] = useState(0);
  let newInd = 0;
  
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
  }, [])
  
  useEffect(() => {
    const displayedButtons = async () => {
      const button = await fetchButoonCategories()
      setButtonDisplay(button.slice(0, 4));
    };
    displayedButtons();
  }, [])
  

  const changeDisplay = (direction : number, index : number) => {
    setButtonDisplay(buttonCategories.slice(index, index+4));
    const clicked = IsClickedButton;
    // for (let i = 0; i < buttonDisplay.length; i += 1) {
  
    //   if (clicked[i]) {
    //     clicked[i] = false;
    //     if (i+direction >= 0 || i+direction < buttonCategories.length) {
    //       clicked[i+direction] = true;
    //     }
    //   }
    // }

    // setIsClickedButton(clicked);
    console.log(IsClickedButton);
  }

  const handlePrevious = () => {
    if (ind > 0) {
      newInd = ind - 1;
      setInd(newInd);
      changeDisplay(-1, newInd);
    }
  };

  const handleNext = () => {
    if (ind + 4 < buttonCategories.length) {
      newInd = ind + 1;
      setInd(ind+1);
      changeDisplay(1, newInd);
      
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
        <FrontButton onClick={handlePrevious}>
          <Front/>
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
            index={index+ind}
          />
        ))}
        <BackButton onClick={handleNext}>
          <Back/>
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
