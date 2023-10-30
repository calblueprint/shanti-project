import Image from 'next/image';

import Link from 'next/link';
import React from 'react';

import { NavBarComp, ButtonsDiv } from '../styles/components';

export default function NavBar() {
  return (
    <NavBarComp>
      <Link href="../storefront">
        <Image
          src="/images/ShantiLogo.png"
          alt="logo pic"
          width={125}
          height={70}
        />
      </Link>

      <ButtonsDiv>
        <Link href="../profileScreen">
          <Image
            src="/images/Profile.png"
            alt="logo pic"
            width={40}
            height={40}
          />
        </Link>
        <Link href="../checkout">
          <Image src="/images/Cart.png" alt="logo pic" width={30} height={40} />
        </Link>
      </ButtonsDiv>
    </NavBarComp>
  );
}
