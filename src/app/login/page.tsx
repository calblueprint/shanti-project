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

import { handleSignUp, signInWithEmail } from '../../api/supabase/auth/auth';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <main>
      <GlobalStyle />
      <Fullscreen>
        <Img />
        <LoginBox>
          <LoginContent>
            <WelcomeSign>Welcome</WelcomeSign>
            <LoginForm changeUserName={setEmail} changePassword={setPassword} />
            <Button onClick={() => signInWithEmail(email, password)}>
              Log In
            </Button>
            <button type="button" onClick={() => handleSignUp(email, password)}>
              Sign up
            </button>
          </LoginContent>
        </LoginBox>
      </Fullscreen>
    </main>
  );
}
