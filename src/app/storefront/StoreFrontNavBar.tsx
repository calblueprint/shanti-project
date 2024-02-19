import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import supabase from '@/api/supabase/createClient';
import { fetchUser } from '@/api/supabase/queries/user_queries';
import { useRouter } from 'next/navigation';

import { totalNumberOfItemsInCart } from '../../api/supabase/queries/cart_queries';

import {
  NavBarComp,
  ButtonsDiv,
  CartTotalCircle,
  UserProfileIcon,
  ShoppingCartIcon,
} from '../../components/NavBarFolder/styles';

import { Product } from '../../schema/schema';

import { ButtonsContainer } from './styles';

import { buttons } from './buttonValues';

import ProductButtons from './productButtons';

export default function StoreFrontNavBar(props: {
  setFilteredProducts: (category: Product[]) => void;
  setIsClickedButton: (clicked: boolean[]) => void;
  IsClickedButton: boolean[];
  setCategoryWord: (word: string) => void;
}) {
  const [data, setData] = useState(0);
  const [isZero, setIsZero] = useState(true);
  const {
    setFilteredProducts,
    setIsClickedButton,
    IsClickedButton,
    setCategoryWord,
  } = props;
  const [deliveryEnabled, setDeliveryEnabled] = useState<boolean>(false);
  useEffect(() => {
    (async () => {
      const { data: sessionData, error } = await supabase.auth.getSession();

      if (error) throw error;
      if (
        !sessionData ||
        !sessionData.session ||
        !sessionData.session.user ||
        !sessionData.session.user.id
      )
        return;

      const userData = await fetchUser();
      setDeliveryEnabled(userData.delivery_allowed);
    })();
  }, []);

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
  const router = useRouter();

  return (
    <NavBarComp>
      <Link href="../storefront">
        <Image
          src="/images/ShantiLogo.png"
          alt="Shanti Logo"
          width={125}
          height={70}
        />
      </Link>
      <ButtonsContainer>
        {buttons.map((type, index) => (
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
      </ButtonsContainer>

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
