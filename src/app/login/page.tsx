'use client';

import { useState } from 'react';

import Image from 'next/image';

import supabase from '@/api/supabase/createClient';

import LoginForm from '../../components/LoginForm';

import {
  GlobalStyle,
  Fullscreen,
  LoginBox,
  LoginContent,
  WelcomeSign,
  Button,
  ErrorMessage,
} from './styles';

import { signInWithEmail } from '../../api/supabase/auth/auth';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setErrorMessage('');

    if (error) {
      console.error('Sign-in error:', error);
      setErrorMessage('Incorrect email or password');
    } else {
      window.location.href = '/storefront';
    }
  };

  return (
    <main>
      <GlobalStyle />
      <Fullscreen>
        <Image
          src="/images/ShantiLogo.png"
          alt="logo pic"
          width={125}
          height={65}
          style={{ marginTop: '30px', marginLeft: '30px' }}
        />
        <LoginBox>
          <LoginContent>
            <WelcomeSign>Welcome</WelcomeSign>
            <LoginForm changeUserName={setEmail} changePassword={setPassword} />
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            <Button onClick={handleLogin}>Log In</Button>
            {/* <Button type="button" onClick={() => handleSignUp(email, password)}>
              Sign up
            </Button> */}
          </LoginContent>
        </LoginBox>
      </Fullscreen>
    </main>
  );
}
