'use client';

import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { Heading2, Heading4, Body2, Body3 } from '@/styles/fonts';
import {
  addOrRemoveProductFromFavorite,
  arrayOfFavorites,
  fetchUser,
  fetchUserAddress,
} from '@/api/supabase/queries/user_queries';
import { Address, Product, User } from '@/schema/schema';
import ViewAllButton from '@/components/ViewAllButton/ViewAllButton';
import BackButton from '../../components/BackButton/BackButton';
import {
  LogOutButton,
  GlobalStyle,
  NavBarMovedUP,
  FooterMoved,
  AccountDetails,
  HeadingBack,
  HeadingSpacing,
  TextSpacing,
  OrderHistory,
  FavoritesContainer,
  FavoriteDiv,
  HeartIcon,
  BackButtonDiv,
} from './styles';
import { signOut } from '../../api/supabase/auth/auth';
import 'react-toastify/dist/ReactToastify.css';
import { TransparentButton } from '../favorites/styles';

export default function Profile() {
  const [Favorites, setFavorites] = useState<Product[]>([]);
  const [user, setUser] = useState<User>();
  async function getUser() {
    const data = await fetchUser();
    setUser(data);
  }
  const [UserAddress, setUserAddress] = useState<Address>();
  async function getUserAddress() {
    const data = await fetchUser();
    const address = await fetchUserAddress(data.id);
    setUserAddress(address);
  }

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
        <BackButtonDiv>
          <BackButton destination="./storefront" />
        </BackButtonDiv>
        <Heading2>My Profile</Heading2>
      </HeadingBack>
      <GlobalStyle />
      <AccountDetails>
        <Heading4>Account Details</Heading4>
        <HeadingSpacing>
          <Body2>Email</Body2>
        </HeadingSpacing>
        <TextSpacing>
          <Body3>{user?.email}</Body3>
        </TextSpacing>
        <HeadingSpacing>
          <Body2>Name</Body2>
        </HeadingSpacing>
        <TextSpacing>
          <Body3>
            {user?.first_name} {user?.last_name}
          </Body3>
        </TextSpacing>
        <HeadingSpacing>
          <Body2>Address</Body2>
        </HeadingSpacing>
        <TextSpacing>
          <Body3>
            {UserAddress?.street}, {UserAddress?.city}, {UserAddress?.zipcode}
          </Body3>
        </TextSpacing>
        <LogOutButton onClick={() => showToastMessage()}>Log Out</LogOutButton>
      </AccountDetails>
      <OrderHistory>
        <Heading4>Order History</Heading4>
        <ViewAllButton destination="./favorites" />
      </OrderHistory>
      <FavoritesContainer>
        <Heading4>Favorites</Heading4>
        <ViewAllButton destination="./favorites" />
        {Favorites.slice(0, 2).map(favorite => (
          <FavoriteDiv key={favorite.id}>
            <img
              src={favorite.photo}
              alt={favorite.name}
              style={{ width: '75px', height: '75px' }}
            />
            <p>
              {favorite.name}
              <br />
              Product ID: {favorite.id}
            </p>
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
