'use client';

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
