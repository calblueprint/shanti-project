'use client';

import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { Heading2, Heading4, Body2, Body3} from '@/styles/fonts';
import supabase from '@/api/supabase/createClient';
import { fetchUser } from '@/api/supabase/queries/user_queries';
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
} from './styles';
import { signOut } from '../../api/supabase/auth/auth';
import 'react-toastify/dist/ReactToastify.css';
import { OrderContainer } from '../delivery/styles';

export default function Profile() {
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

      const data = await fetchUser();
      setDeliveryEnabled(data.delivery_allowed);
    })();
  }, []);

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
          ethanauyeung@gmail.com {/* replace with correct user info after */}
        </Body3>
        </TextSpacing>
        <HeadingSpacing>
        <Body2> 
          Name
        </Body2>
        </HeadingSpacing>
        <TextSpacing>
        <Body3> 
          Ethan Auyeung {/* replace with correct user info after */}
        </Body3>
        </TextSpacing>
        <HeadingSpacing>
        <Body2> 
          Address
        </Body2>
        </HeadingSpacing>
        <TextSpacing>
        <Body3> 
          123 Telegraph Ave, Berkeley, 94704 {/* replace with correct user info after */}
        </Body3>
        </TextSpacing>
        <LogOutButton onClick={() => showToastMessage()}>Log Out!</LogOutButton>
      </AccountDetails>
      <OrderHistory>
      <Heading4> 
        Order History
      </Heading4>
      </OrderHistory>
      <FavoritesContainer>
      <Heading4> 
        Favorites
      </Heading4>
      </FavoritesContainer>
      {/* <PopUp closeButton={false} autoClose={3000} hideProgressBar limit={1} />
      <LogOutButton onClick={() => router.push('/favorites')}>
        Favorites
      </LogOutButton> */}
      <FooterMoved />
    </main>
  );
}
