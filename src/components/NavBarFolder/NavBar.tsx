import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { Body2 } from '@/styles/fonts';
import { totalNumberOfItemsInCart } from '../../api/supabase/queries/cart_queries';

import {
  NavBarComp,
  ButtonsDiv,
  CartTotalCircle,
  UserProfileIcon,
  ShoppingCartIcon,
  IconWithLabelLink,
} from './styles';

export default function NavBar({ ...rest }) {
  const [data, setData] = useState(0);
  const [isZero, setIsZero] = useState(true);

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

  return (
    <NavBarComp {...rest}>
      <IconWithLabelLink href="../storefront">
        <Image
          src="/images/ShantiLogo.png"
          alt="Shanti Logo"
          width={125}
          height={70}
        />
      </IconWithLabelLink>

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
