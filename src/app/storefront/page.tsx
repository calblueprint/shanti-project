'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
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
        <FontAwesomeIcon icon={faShoppingCart} />
        <div>Cart</div>
      </Button>
      <Button onClick={handleProfileClick}>
        <FontAwesomeIcon icon={faUser} />
        <div>Profile</div>
      </Button>
    </main>
  );
}
