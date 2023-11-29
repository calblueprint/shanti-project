import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { totalNumberOfItemsInCart } from '../api/supabase/queries/product_queries';

import {
  NavBarComp,
  ButtonsDiv,
  CartTotalCircle,
  UserProfileIcon,
  ShoppingCartIcon,
} from '../styles/components';

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
      <Link href="../storefront">
        <Image
          src="/images/ShantiLogo.png"
          alt="Shanti Logo"
          width={125}
          height={70}
        />
      </Link>

      <ButtonsDiv>
        <Link href="../profileScreen">
          <UserProfileIcon />
          <p>User</p>
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
