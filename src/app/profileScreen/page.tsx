<<<<<<< HEAD
<<<<<<< HEAD
export default function Profile() {
  return (
    <main>
      <div>Profile</div>
    </main>
  );
}
=======
=======
>>>>>>> 22db8ee5f1602e4c6c766b86d5cb474c7b6dd5fa
'use client';
import { LogOutButton, GlobalStyle } from './style';
import { createClient } from '@supabase/supabase-js';

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
<<<<<<< HEAD
>>>>>>> 22db8ee (refactor:changed folder name)
=======
>>>>>>> 22db8ee5f1602e4c6c766b86d5cb474c7b6dd5fa
