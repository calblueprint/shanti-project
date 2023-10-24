'use client';

import { LogOutButton, GlobalStyle } from './style';

import { signOut } from '../../api/supabase/auth/auth';

import NavBar from '../../components/NavBar';

export default function Profile() {
  return (
    <main>
      <NavBar />
      <GlobalStyle />
      <LogOutButton onClick={() => signOut()}>Sign Out</LogOutButton>
    </main>
  );
}
