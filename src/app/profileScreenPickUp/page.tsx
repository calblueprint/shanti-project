'use client';

import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { Heading2, Heading4, Body2, Body3} from '@/styles/fonts';
import supabase from '@/api/supabase/createClient';
import { addOrRemoveProductFromFavorite, arrayOfFavorites, fetchUser, fetchUserAddress } from '@/api/supabase/queries/user_queries';
import BackButton from '../../components/BackButton/BackButton';
import {
  LogOutButton,
  GlobalStyle,
  PopUp,
  NavBarMovedUP,
  FooterMoved,
  AccountDetails,
  HeadingBack,
  HeadingSpacing,
  TextSpacing,
  OrderHistory,
  FavoritesContainer,
  FavoriteDiv,
} from './styles';
import { signOut } from '../../api/supabase/auth/auth';
import 'react-toastify/dist/ReactToastify.css';
import { OrderContainer } from '../delivery/styles';
import ViewAllButton from '@/components/ViewAllButton/ViewAllButton';
import { Product, User, Address} from '@/schema/schema';
import {HeartIcon, OutterBox, OutterFavoriteDiv, TransparentButton } from '../favorites/styles';

export default function Profile() {
    const [User, setUser] = useState<User>();
    const [UserAddress, setUserAddress] =  useState<Address>();
    async function getUser() {
        const data = await fetchUser();
        setUser(data);

    }
    async function getUserAddress() {
        const data = await fetchUser();
        const address = await fetchUserAddress(data.id);
        setUserAddress(address);
    }
    const [Favorites, setFavorites] = useState<Product[]>([]);

    async function fetchProducts() {
      const data = (await arrayOfFavorites()) as Product[];
      setFavorites(data);
    }
    useEffect(() => {
      fetchProducts();
      getUser();
      getUserAddress();
    }, []);
  
    async function clickFunctions(props: { fav: Product }) {
      const { fav } = props;
      addOrRemoveProductFromFavorite(fav, false);
      setFavorites(Favorites.filter(Prod => Prod.id !== fav.id));
    }

  const router = useRouter();
  const showToastMessage = () => {
    signOut();
    toast("You've been Logged Out! Redirecting...", {
      position: toast.POSITION.TOP_CENTER,
    });
    setTimeout(() => {
      router.push('/login');
    }, 3000);
  };
  return (
    <main>
      <NavBarMovedUP />
      <HeadingBack>
      <BackButton destination= "./storefront" /> 
      <Heading2> 
        My Profile
      </Heading2>
      </HeadingBack>
      <GlobalStyle />
      <AccountDetails>
        <Heading4> 
          Account Details
        </Heading4>
        <HeadingSpacing>
        <Body2> 
          Email
        </Body2>
        </HeadingSpacing>
        <TextSpacing>
        <Body3> 
          {User?.email}
        </Body3>
        </TextSpacing>
        <HeadingSpacing>
        <Body2> 
          Name
        </Body2>
        </HeadingSpacing>
        <TextSpacing>
        <Body3> 
          {User?.first_name} {User?.last_name}
        </Body3>
        </TextSpacing>
        <HeadingSpacing>
        <Body2> 
          Phone Number
        </Body2>
        </HeadingSpacing>
        <TextSpacing>
        <Body3> 
          +1 510-123-4567 {/* User?.phone */}
        </Body3>
        </TextSpacing>
        <LogOutButton onClick={() => showToastMessage()}>Log Out</LogOutButton>
      </AccountDetails>
      <OrderHistory>
      <Heading4> 
        Order History
      </Heading4>
      <ViewAllButton destination = "./favorites"/>
      </OrderHistory>
      <FavoritesContainer>
      <Heading4> 
        Favorites
      </Heading4>
      <ViewAllButton destination = "./favorites"/>
          {Favorites.slice(0,2).map(favorite => (
            <FavoriteDiv key={favorite.id}>
              <img
                src={favorite.photo}
                alt={favorite.name}
                style={{ width: '75px', height: '75px' }}
              />
              <p>{favorite.name}<br></br>Product ID: {favorite.id}</p>
              <TransparentButton
                onClick={() => clickFunctions({ fav: favorite })}
              >
                <HeartIcon />
              </TransparentButton>
            </FavoriteDiv>
          ))}
      </FavoritesContainer>
      {/* <PopUp closeButton={false} autoClose={3000} hideProgressBar limit={1} />
      <LogOutButton onClick={() => router.push('/favorites')}>
        Favorites
      </LogOutButton> */}
      <FooterMoved />
    </main>
  );
}
