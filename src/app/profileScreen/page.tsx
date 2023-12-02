'use client';

import { useRouter } from 'next/navigation';

import { toast } from 'react-toastify';

import {
  LogOutButton,
  GlobalStyle,
  PopUp,
  NavBarMovedUP,
  FooterMoved,
} from './styles';

import { signOut } from '../../api/supabase/auth/auth';

import 'react-toastify/dist/ReactToastify.css';

export default function Profile() {
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
      <GlobalStyle />
      <LogOutButton onClick={() => showToastMessage()}>Log Out!</LogOutButton>
      <PopUp closeButton={false} autoClose={3000} hideProgressBar limit={1} />
      <LogOutButton onClick={() => router.push('/favorites')}>
        Favorites
      </LogOutButton>
      <FooterMoved />
    </main>
  );
}
