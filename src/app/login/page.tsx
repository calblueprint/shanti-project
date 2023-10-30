'use client';

import { useState } from 'react';

import Image from 'next/image';
import LoginForm from '../../components/LoginForm';

import {
  GlobalStyle,
  Fullscreen,
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
        <Image
          src="/images/ShantiLogo.png"
          alt="logo pic"
          width={125}
          height={70}
        />
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
