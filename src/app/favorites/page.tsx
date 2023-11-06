'use client';

import { ArrowLeft } from 'react-feather';

import { arrayOfFavorites, getUserInfo } from '../storefront/helperFunction';

import { useRouter } from 'next/navigation';

import {
  FavoriteDiv,
  OutterFavoriteDiv,
  BackDiv,
  GlobalStyle,
  OutterBox,
  Backtext,
  HeartIcon,
  TransparentButton,
} from '../profileScreen/style';

import NavBar from '../../components/NavBar';

import { useState, useEffect } from 'react';

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
    try {
      const data = (await arrayOfFavorites()) as Product[];
      setFavorites(data);
    } catch (error) {}
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  async function clickFunctions(props: { fav: Product }) {
    const { fav } = props;

    getUserInfo(fav, false);
    const data = (await arrayOfFavorites()) as Product[];
    setFavorites(data);
    console.log(Favorites);
  }

  return (
    <div>
      <GlobalStyle />
      <NavBar />
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
