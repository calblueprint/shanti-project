'use client';

import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { Heading2, Heading4, Body2, Body3, Body2Bold } from '@/styles/fonts';
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

function FavoriteSection(props: {
  Favorites: Product[];
  setFavorites: (category: Product[]) => void;
}) {
  async function clickFunctions(props2: { fav: Product }) {
    const { fav } = props2;
    addOrRemoveProductFromFavorite(fav, false);
    setFavorites(Favorites.filter(Prod => Prod.id !== fav.id));
  }
  const { Favorites, setFavorites } = props;
  return (
    <main>
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
    </main>
  );
}

function OrderHistorySection() {
  return (
    <main>
      <OrderHistory>
        <Heading4>Order History</Heading4>
        <ViewAllButton destination="./favorites" />
      </OrderHistory>
    </main>
  );
}
function AccountDetailSection() {
  const [user, setUser] = useState<User>();
  const [UserAddress, setUserAddress] = useState<Address>();
  const router = useRouter();
  async function getUser() {
    const data = await fetchUser();
    setUser(data);
  }
  async function getUserAddress() {
    const data = await fetchUser();
    const address = await fetchUserAddress(data.id);
    setUserAddress(address);
  }
  const showToastMessage = () => {
    signOut();
    toast("You've been Logged Out! Redirecting...", {
      position: toast.POSITION.TOP_CENTER,
    });
    setTimeout(() => {
      router.push('/login');
    }, 3000);
  };
  useEffect(() => {
    getUser();
    getUserAddress();
  }, []);
  return (
    <main>
      <AccountDetails>
        <Heading4>Account Details</Heading4>
        <HeadingSpacing>
          <Body2Bold>Email</Body2Bold>
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
    </main>
  );
}

export default function Profile() {
  const [Favorites, setFavorites] = useState<Product[]>([]);
  async function fetchProducts() {
    const data = (await arrayOfFavorites()) as Product[];
    setFavorites(data);
  }
  useEffect(() => {
    fetchProducts();
  }, []);

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
      <AccountDetailSection />
      <OrderHistorySection />
      <FavoriteSection Favorites={Favorites} setFavorites={setFavorites} />
      {/* <PopUp closeButton={false} autoClose={3000} hideProgressBar limit={1} />
      <LogOutButton onClick={() => router.push('/favorites')}>
        Favorites
      </LogOutButton> */}
      <FooterMoved />
    </main>
  );
}
