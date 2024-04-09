'use client';

import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import {
  Heading2,
  Body3,
  Heading3,
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
  fetchCurrentUserAddress,
  fetchUserAddress,
} from '@/api/supabase/queries/user_queries';
import {
  Address,
  Order,
  ProductWithQuantity,
  Product,
  User,
} from '@/schema/schema';
import ViewAllButton from '@/components/ViewAllButton/ViewAllButton';
import NavBar from '@/components/NavBarFolder/NavBar';
import {
  fetchOrdersByUserIdSorted,
  fetchOrderProductById,
  fetchProductWithQuantityById,
} from '@/api/supabase/queries/order_queries';
import { Check, CheckCircle, X } from 'react-feather';
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
  MostRecentOrder,
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
  if (Favorites.length > 0) {
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
                <p>
                  {favorite.name}
                  <br />
                  Product ID: {favorite.id}
                </p>
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

function OrderHistorySection(props: { Orders: Order[] }) {
  const { Orders } = props;
  const [firstOrderProducts, setFirstOrderProducts] = useState<
    ProductWithQuantity[]
  >([]);
  const [fD, setFormattedDate] = useState<string>('');

  useEffect(() => {
    async function fetchFirstOrderProducts() {
      if (Orders.length > 0) {
        const firstOrder = Orders.filter(
          order => order.order_product_id_array.length !== 0,
        )[0];
        // handleErrorlater
        if (firstOrder) {
          const firstOrderProductIds = firstOrder.order_product_id_array.slice(
            0,
            3,
          );

          const productIds = await Promise.all(
            firstOrderProductIds.map(productId =>
              fetchOrderProductById(productId).then(
                orderproduct => orderproduct.product_id,
              ),
            ),
          );

          const productArray = await Promise.all(
            productIds.map(async productId =>
              fetchProductWithQuantityById(productId).then(product => product),
            ),
          );

          setFirstOrderProducts(productArray);

          const timestamp = firstOrder.created_at;
          const date = new Date(timestamp);
          const options: Intl.DateTimeFormatOptions = {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          };
          const formattedDate = date.toLocaleDateString('en-US', options);
          setFormattedDate(formattedDate);
        }
      }
    }
    fetchFirstOrderProducts();
  }, [Orders]);

  if (firstOrderProducts.length > 0) {
    let backgroundColor = 'transparent';
    if (Orders[0].status === 'Submitted') {
      backgroundColor = '#CEE8BE';
    } else if (Orders[0].status === 'Rejected') {
      backgroundColor = '#FFDDDD';
    } else if (Orders[0].status === 'Confirmed') {
      backgroundColor = '#C7DDFF';
    }
    let icon;
    if (Orders[0].status === 'Submitted') {
      icon = <CheckCircle />;
    } else if (Orders[0].status === 'Rejected') {
      icon = <X />;
    } else if (Orders[0].status === 'Confirmed') {
      icon = <Check />;
    } else {
      icon = null;
    }
    return (
      <main>
        <OrderHistory>
          <HeaderDiv>
            <Heading2>Order History</Heading2>
            <ViewAllButton destination="./orderHistory" />
          </HeaderDiv>
          <div
            style={{
              marginTop: '20px',
              width: '100%',
            }}
          >
            <Body1Bold
              style={{
                marginTop: '20px',
              }}
            >
              Order No. {Orders[0].id}
            </Body1Bold>
            <Body2
              style={{
                marginTop: '5px',
              }}
            >
              {fD}
            </Body2>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 'fit-content',
                padding: '5px 10px',
                borderRadius: '20px', // adjust the border radius to make it more oval-shaped
                background: backgroundColor,
                marginTop: '20px',
                marginBottom: '15px',
              }}
            >
              {icon}
              <Body2Bold style={{ marginLeft: '13px' }}>
                {Orders[0].status}
              </Body2Bold>
            </div>
            <MostRecentOrder>
              {firstOrderProducts.map(product => (
                <div
                  key={product.id}
                  style={{
                    width: '102px',
                    height: '102px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '20px',
                  }}
                >
                  <img
                    src={product.photo}
                    alt={product.name}
                    style={{
                      width: '102px',
                      height: '102px',
                    }}
                  />
                </div>
              ))}
            </MostRecentOrder>
          </div>
        </OrderHistory>
      </main>
    );
  }
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
function LogoutSection() {
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
      {/* <LogOutDiv> */}
      <LogOutButton onClick={() => showToastMessage()}>Log Out</LogOutButton>
      {/* </LogOutDiv> */}
    </main>
  );
}

export default function Profile() {
  const [Favorites, setFavorites] = useState<Product[]>([]);
  const [user, setUser] = useState<User>();
  const router = useRouter();

  const [Orders, setOrder] = useState<Order[]>([]);

  async function fetchProducts() {
    const data = (await arrayOfFavorites()) as Product[];
    setFavorites(data);
  }

  async function fetchOrders() {
    const data = (await fetchOrdersByUserIdSorted()) as Order[];
    setOrder(data);
  }

  async function getUser() {
    const data = await fetchUser();
    setUser(data);
  }
  useEffect(() => {
    fetchProducts();
    fetchOrders();
    getUser();
  }, []);
  if (user === undefined) {
    return <p> Loading User</p>;
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
            <OrderHistorySection Orders={Orders} />
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
