'use client';

import React from 'react';
import Image from 'next/image';
import ShoppingCartImage from './Shopping_Cart_01.png';
import UserProfileImage from './User_01.png';
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
      <Button onClick={handleCheckoutClick}>
        <Image src={ShoppingCartImage} alt="Cart" />
        <div>Cart</div>
      </Button>
      <Button onClick={handleProfileClick}>
        <Image src={UserProfileImage} alt="Profile" />
        <div>Profile</div>
      </Button>
    </main>
  );
}
