'use client';

import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react';
import {
  Heading2,
  Body3,
  Heading1,
  Body1Bold,
  Body2Bold,
  Body1,
  Body2,
  Heading4Bold,
  Body2Light,
} from '@/styles/fonts';
import {
  addOrRemoveProductFromFavorite,
  arrayOfFavorites,
  fetchUser,
  fetchUserAddress,
} from '@/api/supabase/queries/user_queries';
import { Address, Product, User } from '@/schema/schema';
import ViewAllButton from '@/components/ViewAllButton/ViewAllButton';
import NavBar from '@/components/NavBarFolder/NavBar';
import BackButton from '../../components/BackButton/BackButton';
import {
  LogOutButton,
  AccountDetails,
  HeadingSpacing,
  TextSpacing,
  OrderHistory,
  FavoritesContainer,
  ProductNameDiv,
  FavoriteDiv,
  HeartIcon,
  HeaderDiv,
  MainContainer,
  AccountDiv,
  InfoDiv,
  ContentContainer,
  FlexContainer,
  PageContainer,
  AccountContent,
} from './styles';
import { signOut } from '../../api/supabase/auth/auth';
import 'react-toastify/dist/ReactToastify.css';
import { ImageLinkWrapper, TransparentButton } from '../favorites/styles';

function FavoriteSection(props: {
  Favorites: Product[];
  setFavorites: (category: Product[]) => void;
}) {
  const { Favorites, setFavorites } = props;
  async function clickFunctions(props2: { fav: Product }) {
    const { fav } = props2;
    addOrRemoveProductFromFavorite(fav, false);
    setFavorites(Favorites.filter(Prod => Prod.id !== fav.id));
  }
  return (
    <FavoritesContainer>
      <HeaderDiv>
        <Heading4Bold>Favorites</Heading4Bold>
        <ViewAllButton destination="./favorites" />
      </HeaderDiv>
      {Favorites.slice(0, 2).map(favorite => (
        <FavoriteDiv key={favorite.id}>
          {/* Doesn't have an href, but figma states clickable images */}
          <ImageLinkWrapper href="">
            <img
              src={favorite.photo}
              alt={favorite.name}
              style={{ width: '75px', height: '75px' }}
            />
          </ImageLinkWrapper>

          <ProductNameDiv>
            <Body2Bold>{favorite.name}</Body2Bold>
            <Body3>Category: {favorite.category}</Body3>
          </ProductNameDiv>
          <TransparentButton onClick={() => clickFunctions({ fav: favorite })}>
            <HeartIcon />
          </TransparentButton>
        </FavoriteDiv>
      ))}
    </FavoritesContainer>
  );
}

function OrderHistorySection() {
  return (
    <OrderHistory>
      <HeaderDiv>
        <Heading4Bold>Order History</Heading4Bold>
        <ViewAllButton destination="./orderHistory" />
      </HeaderDiv>
    </OrderHistory>
  );
}
function AccountDetailSectionDelivery(props: { user: User }) {
  const { user } = props;
  const [UserAddress, setUserAddress] = useState<Address>();

  async function getUserAddress() {
    const data = await fetchUser();
    const address = await fetchUserAddress(data.id);
    setUserAddress(address);
  }

  useEffect(() => {
    if (user.delivery_allowed) getUserAddress();
  }, [user]);

  return (
    <AccountDetails>
      <AccountContent>
        <Heading4Bold>Account Details</Heading4Bold>
        <Body1Bold>Email</Body1Bold>
        <Body2Light>{user?.email}</Body2Light>
        <Body1Bold>Name</Body1Bold>
        <Body2Light>
          {user?.first_name} {user?.last_name}
        </Body2Light>
        {user.delivery_allowed ? (
          <>
            <Body1Bold>Address</Body1Bold>
            <Body2Light>
              {UserAddress?.street}, {UserAddress?.city}, {UserAddress?.zipcode}
            </Body2Light>
          </>
        ) : null}
        <Body1Bold>Phone Number</Body1Bold>
        <Body2Light>+1 510-123-4567 {/* User?.phone */}</Body2Light>
      </AccountContent>
    </AccountDetails>
  );
}

export default function Profile() {
  const [Favorites, setFavorites] = useState<Product[]>([]);
  const [user, setUser] = useState<User>();
  const router = useRouter();

  async function fetchProducts() {
    const data = (await arrayOfFavorites()) as Product[];
    setFavorites(data);
  }
  async function getUser() {
    const data = await fetchUser();
    setUser(data);
  }
  useEffect(() => {
    fetchProducts();
    getUser();
  }, []);
  if (user === undefined) {
    return <p>Error Loading User</p>;
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

  return (
    <PageContainer>
      <ToastContainer
        position="top-right"
        autoClose={500}
        limit={1}
        hideProgressBar
      />
      <NavBar />
      <MainContainer>
        <BackButton destination="./storefront" />
        <Heading1>My Profile</Heading1>
        <ContentContainer>
          <AccountDiv>
            <AccountDetailSectionDelivery user={user} />
            <LogOutButton onClick={() => showToastMessage()}>
              <Body1Bold>Log Out</Body1Bold>
            </LogOutButton>
          </AccountDiv>
          <InfoDiv>
            <OrderHistorySection />
            <FavoriteSection
              Favorites={Favorites}
              setFavorites={setFavorites}
            />
          </InfoDiv>
        </ContentContainer>

        {/* <PopUp closeButton={false} autoClose={3000} hideProgressBar limit={1} />
        <LogOutButton onClick={() => router.push('/favorites')}>
          Favorites
        </LogOutButton> */}
      </MainContainer>
    </PageContainer>
  );
}
