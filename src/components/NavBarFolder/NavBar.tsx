import supabase from '@/api/supabase/createClient';
import { fetchUser } from '@/api/supabase/queries/user_queries';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { totalNumberOfItemsInCart } from '../../api/supabase/queries/cart_queries';

import {
  NavBarComp,
  ButtonsDiv,
  CartTotalCircle,
  UserProfileIcon,
  ShoppingCartIcon,
  ProfileButton,
  ProfileFont,
} from './styles';

export default function NavBar({ ...rest }) {
  const [data, setData] = useState(0);
  const [isZero, setIsZero] = useState(true);
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
  const checkDelivery = () => {
    if (deliveryEnabled) {
      router.push('/profileScreenDelivery');
    } else {
      router.push('/profileScreenPickUp');
    }
  };

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
        <ProfileButton onClick={checkDelivery}>
          <UserProfileIcon />
          <ProfileFont>User</ProfileFont>
        </ProfileButton>
        <Link href="../cart">
          <ProfileButton>
            <ShoppingCartIcon />
            <ProfileFont>Cart</ProfileFont>
            <CartTotalCircle $isZero={isZero}>{data}</CartTotalCircle>
          </ProfileButton>
        </Link>
      </ButtonsDiv>
    </NavBarComp>
  );
}
