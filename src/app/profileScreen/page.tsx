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
} from '@/styles/fonts';
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
  NavBarMovedUP,
  AccountDetails,
  HeadingBack,
  HeadingSpacing,
  TextSpacing,
  OrderHistory,
  FavoritesContainer,
  ProductNameDiv,
  FavoriteDiv,
  HeartIcon,
  BackButtonDiv,
  BlankSpace,
  HeaderDiv,
  Fullscreen,
} from './styles';
import { signOut } from '../../api/supabase/auth/auth';
import 'react-toastify/dist/ReactToastify.css';
import { TransparentButton } from '../favorites/styles';

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
    <main>
      <FavoritesContainer>
        <HeaderDiv>
          <Heading2>Favorites</Heading2>
          <ViewAllButton destination="./favorites" />
        </HeaderDiv>
        {Favorites.slice(0, 2).map(favorite => (
          <FavoriteDiv key={favorite.id}>
            <img
              src={favorite.photo}
              alt={favorite.name}
              style={{ width: '75px', height: '75px' }}
            />
            <ProductNameDiv>
              <Body1Bold>{favorite.name}</Body1Bold>
              <Body2>Category: {favorite.category}</Body2>
            </ProductNameDiv>
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
        <HeaderDiv>
          <Heading2>Order History</Heading2>
          <ViewAllButton destination="./orderHistory" />
        </HeaderDiv>
      </OrderHistory>
    </main>
  );
}
function AccountDetailSectionDelivery(props: { user: User }) {
  const { user } = props;
  const [UserAddress, setUserAddress] = useState<Address>();
  const router = useRouter();

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
    getUserAddress();
  }, []);
  return (
    <main>
      <AccountDetails>
        <Heading2>Account Details</Heading2>
        <HeadingSpacing>
          <Body2Bold>Email</Body2Bold>
        </HeadingSpacing>
        <TextSpacing>
          <Body1>{user?.email}</Body1>
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
          <Body1>
            {UserAddress?.street}, {UserAddress?.city}, {UserAddress?.zipcode}
          </Body1>
        </TextSpacing>
        <LogOutButton onClick={() => showToastMessage()}>Log Out</LogOutButton>
      </AccountDetails>
    </main>
  );
}
function AccountDetailSectionPickUp(props: { user: User }) {
  const { user } = props;

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
      <AccountDetails>
        <Heading2>Account Details</Heading2>
        <HeadingSpacing>
          <Body1Bold>Email</Body1Bold>
        </HeadingSpacing>
        <TextSpacing>
          <Body2>{user?.email}</Body2>
        </TextSpacing>
        <HeadingSpacing>
          <Body1Bold>Name</Body1Bold>
        </HeadingSpacing>
        <TextSpacing>
          <Body2>
            {user?.first_name} {user?.last_name}
          </Body2>
        </TextSpacing>
        <HeadingSpacing>
          <Body1Bold>Phone Number</Body1Bold>
        </HeadingSpacing>
        <TextSpacing>
          <Body2>+1 510-123-4567 {/* User?.phone */}</Body2>
        </TextSpacing>
        <LogOutButton onClick={() => showToastMessage()}>Log Out</LogOutButton>
      </AccountDetails>
    </main>
  );
}

export default function Profile() {
  const [Favorites, setFavorites] = useState<Product[]>([]);
  const [user, setUser] = useState<User>();

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
  return (
    <Fullscreen>
      <NavBarMovedUP />
      <HeadingBack>
        <BackButtonDiv>
          <BackButton destination="./storefront" />
        </BackButtonDiv>
        <Heading1>My Profile</Heading1>
      </HeadingBack>
      <ToastContainer
        position="top-right"
        autoClose={500}
        limit={1}
        hideProgressBar
      />

      {user.delivery_allowed ? (
        <AccountDetailSectionDelivery user={user} />
      ) : (
        <AccountDetailSectionPickUp user={user} />
      )}
      <OrderHistorySection />
      <FavoriteSection Favorites={Favorites} setFavorites={setFavorites} />
      {/* <PopUp closeButton={false} autoClose={3000} hideProgressBar limit={1} />
      <LogOutButton onClick={() => router.push('/favorites')}>
        Favorites
      </LogOutButton> */}
      <BlankSpace />
    </Fullscreen>
  );
}
