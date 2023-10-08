'use client';

import { useState } from 'react';
import Link from 'next/link';
import LoginForm from '../../components/LoginForm';

import {
  GlobalStyle,
  Fullscreen,
  Img,
  LoginBox,
  LoginContent,
  WelcomeSign,
  Button,
} from './styles';

import {
  handleSignUp,
  signInWithEmail,
  signOut,
} from '../../api/supabase/auth/auth';

export default function App() {
  return (
    <main>
      <GlobalStyle />
      <Fullscreen>
        <Img />
        <LoginBox>
          <LoginContent>
            <WelcomeSign>Welcome</WelcomeSign>
            <LoginForm />
            <Button>
              <Link href="/storefront">Log In</Link>
            </Button>
          </LoginContent>
        </LoginBox>
      </Fullscreen>
    </main>
  );
}

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <input
        name="email"
        onChange={e => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="password"
        name="password"
        onChange={e => setPassword(e.target.value)}
        value={password}
      />
      <button type="button" onClick={() => handleSignUp(email, password)}>
        Sign up
      </button>
      <button type="button" onClick={() => signInWithEmail(email, password)}>
        Sign in
      </button>
      <button type="button" onClick={signOut}>
        Sign out
      </button>
    </>
  );
}
