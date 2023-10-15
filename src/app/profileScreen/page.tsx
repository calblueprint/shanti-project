'use client';

import { LogOutButton, GlobalStyle } from './style';

import { signOut } from '../../api/supabase/auth/auth';

export default function Profile() {
  return (
    <main>
      <GlobalStyle />
      <LogOutButton onClick={() => signOut()}>Sign Out</LogOutButton>
    </main>
  );
}
