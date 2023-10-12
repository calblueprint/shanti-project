'use client';

import React from 'react';
import Link from 'next/link';
import { GlobalStyle, Button } from './styles';

function handleCheckoutClick() {
  window.location.href = '/checkout';
}

function handleProfileClick() {
  window.location.href = '/profileScreen';
}

export default function App() {
  return (
    <main>
      <GlobalStyle />
      <Button>
        <Link href="/checkout">Cart</Link>
      </Button>
      <Button>
        <Link href="/profileScreen">Profile</Link>
      </Button>
    </main>
  );
}
