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
  Heading4,
} from '@/styles/fonts';
import {
  addOrRemoveProductFromFavorite,
  arrayOfFavorites,
  fetchUser,
  fetchCurrentUserAddress,
} from '@/api/supabase/queries/user_queries';
import {
  Address,
  Order,
  ProductWithQuantity,
  Product,
  User,
} from '@/schema/schema';
import ViewAllButton from '@/components/ViewAllButton/ViewAllButton';
import {
  fetchOrdersByUserIdSorted,
  fetchOrderProductById,
  fetchProductWithQuantityById,
} from '@/api/supabase/queries/order_queries';
import { Check, CheckCircle, X } from 'react-feather';
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
  MostRecentOrder,
  ColumnDiv,
  LogOutDiv,
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
        //handleErrorlater
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
          <Heading4>No Current Orders to Display</Heading4>
        </div>
      </OrderHistory>
    </main>
  );
}
function AccountDetailSectionDelivery(props: { user: User }) {
  const { user } = props;
  const [UserAddress, setUserAddress] = useState<Address>();

  useEffect(() => {
    async function getUserAddress() {
      const address = await fetchCurrentUserAddress();
      setUserAddress(address);
    }
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
          <Body1>
            {UserAddress?.street}, {UserAddress?.city}, {UserAddress?.zipcode}
          </Body1>
        </TextSpacing>
      </AccountDetails>
    </main>
  );
}
function AccountDetailSectionPickUp(props: { user: User }) {
  const { user } = props;

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
          <Body2> {user?.phone_numbers}</Body2>
        </TextSpacing>
      </AccountDetails>
    </main>
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
      <LogOutDiv>
        <LogOutButton onClick={() => showToastMessage()}>Log Out</LogOutButton>
      </LogOutDiv>
    </main>
  );
}

export default function Profile() {
  const [Favorites, setFavorites] = useState<Product[]>([]);
  const [user, setUser] = useState<User>();

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
    return <p>Error Loading User</p>;
  }
  return (
    <Fullscreen>
      <NavBarMovedUP />
      <ToastContainer
        position="top-center"
        autoClose={500}
        limit={1}
        hideProgressBar
      />
      <ColumnDiv>
        <MostRecentOrder>
          <HeadingBack>
            <BackButtonDiv>
              <BackButton destination="./storefront" />
            </BackButtonDiv>
            <Heading1>My Profile</Heading1>
          </HeadingBack>
          <HeadingBack />
        </MostRecentOrder>
        <MostRecentOrder>
          {user.delivery_allowed ? (
            <AccountDetailSectionDelivery user={user} />
          ) : (
            <AccountDetailSectionPickUp user={user} />
          )}
          <OrderHistorySection Orders={Orders} />
        </MostRecentOrder>
        <MostRecentOrder>
          <LogoutSection />
          <FavoriteSection Favorites={Favorites} setFavorites={setFavorites} />
        </MostRecentOrder>
      </ColumnDiv>
      <BlankSpace />
    </Fullscreen>
  );
}
