'use client';
import { LogOutButton, GlobalStyle } from './style';
<<<<<<< HEAD
import { signOut } from '../../api/supabase/auth/auth';
=======
import { createClient } from '@supabase/supabase-js';
>>>>>>> c4a80b202167a11fa840139d99e3b2211ac65c6c

export default function Profile() {
  return (
    <main>
      <GlobalStyle />
      <LogOutButton onClick={() => signOut()}>Sign Out</LogOutButton>
    </main>
  );
}

async function signOut() {
  const supabase = createClient(
    'https://raqpvvgsmwarxhaialcz.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhcXB2dmdzbXdhcnhoYWlhbGN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYxODg2MTgsImV4cCI6MjAxMTc2NDYxOH0.triHI7DNSzNeAibtktBZ1b2wQuwnd0WL7R_yZYOJbPc',
  );
  const { error } = await supabase.auth.signOut();
}

