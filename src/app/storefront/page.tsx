'use client';

import React from 'react';
import Link from 'next/link';
import { GlobalStyle, Button } from './styles';

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
