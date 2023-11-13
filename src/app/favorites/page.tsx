'use client';

import { ArrowLeft } from 'react-feather';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { arrayOfFavorites, getUserInfo } from '../storefront/helperFunction';

import {
  FavoriteDiv,
  OutterFavoriteDiv,
  BackDiv,
  GlobalStyle,
  OutterBox,
  Backtext,
  HeartIcon,
  TransparentButton,
  NavBarMovedUP,
} from '../profileScreen/style';

import NavBar from '../../components/NavBar';

interface Product {
  description: string;
  category: string;
  quantity: number;
  photo: string;
  product_id: number;
  name: string;
  updated_at: Date;
}

export default function FavoritesPage() {
  const [Favorites, setFavorites] = useState<Product[]>([]);
  const router = useRouter();
  async function fetchProducts() {
    const data = (await arrayOfFavorites()) as Product[];
    setFavorites(data);
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  async function clickFunctions(props: { fav: Product }) {
    const { fav } = props;
    getUserInfo(fav, false);
    const data = (await arrayOfFavorites()) as Product[];
    setFavorites(data);
  }

  return (
    <div>
      <NavBarMovedUP />
      <GlobalStyle />
      <OutterBox>
        <BackDiv onClick={() => router.push('/profileScreen')}>
          <ArrowLeft />
          <Backtext>Back</Backtext>
        </BackDiv>
        <h1>Favorites</h1>
        <OutterFavoriteDiv>
          {Favorites.map(favorite => (
            <FavoriteDiv key={favorite.product_id}>
              <img
                src={favorite.photo}
                alt={favorite.name}
                style={{ width: '150px', height: '150px' }}
              />
              <p>{favorite.name}</p>
              <TransparentButton
                onClick={() => clickFunctions({ fav: favorite })}
              >
                <HeartIcon />
              </TransparentButton>
            </FavoriteDiv>
          ))}
        </OutterFavoriteDiv>
      </OutterBox>
    </div>
  );
}
