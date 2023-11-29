'use client';

import { ArrowLeft } from 'react-feather';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import {
  arrayOfFavorites,
  addOrRemoveProductFromFavorite,
} from '../../api/supabase/queries/user_queries';

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
} from '../profileScreen/styles';

import { Product } from '../../schema/schema';

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
    addOrRemoveProductFromFavorite(fav, true);
    setFavorites(Favorites.filter(Prod => Prod.id !== fav.id));
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
            <FavoriteDiv key={favorite.id}>
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
