'use client';

import { useState } from 'react';
import Image from 'next/image';
import supabase from '@/api/supabase/createClient';
import LoginForm from '../../components/LoginFormFolder/LoginForm';
import { GlobalStyle } from '../../styles/components';

import {
  Fullscreen,
  LoginBox,
  LoginContent,
  WelcomeSign,
  Button,
  ErrorMessage,
  EyeOffIcon,
  EyeIcon,
} from './styles';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isError, setIsError] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setErrorMessage('');

    if (error) {
      setErrorMessage('Incorrect email or password');
      setIsError(true);
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

            <LoginForm
              isError={isError}
              changeUserName={setEmail}
              changePassword={setPassword}
              showPassword={showPassword}
            />
            {showPassword ? (
              <EyeIcon
                onClick={() => setShowPassword(false)}
                style={{ cursor: 'pointer' }}
              />
            ) : (
              <EyeOffIcon
                onClick={() => setShowPassword(true)}
                style={{ cursor: 'pointer' }}
              />
            )}

            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            <Button style={{ cursor: 'pointer' }} onClick={handleLogin}>
              Log In
            </Button>
            {/* <Button type="button" onClick={() => handleSignUp(email, password)}>
              Sign up
            </Button> */}
          </LoginContent>
        </LoginBox>
      </Fullscreen>
    </main>
  );
}
