'use client';

import { useState, useEffect } from 'react';
import { Heading1 } from '@/styles/fonts';
import BackButton from '../../components/BackButton/BackButton';

import { arrayOfFavorites } from '../../api/supabase/queries/user_queries';

import NavBar from '../../components/NavBarFolder/NavBar';

import { OutterFavoriteDiv, OutterBox, Fullscreen } from './styles';
import IndividualItem from './individualItem';

import { Product } from '../../schema/schema';

export default function FavoritesPage() {
  const [Favorites, setFavorites] = useState<Product[]>([]);

  async function fetchProducts() {
    const data = (await arrayOfFavorites()) as Product[];
    setFavorites(data);
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Fullscreen>
      <NavBar />
      <OutterBox>
        <BackButton destination="./profileScreen" />
        <Heading1>Favorites</Heading1>
        <OutterFavoriteDiv>
          {Favorites.map(favorite => (
            <IndividualItem
              key={favorite.id}
              favorite={favorite}
              setFavorites={setFavorites}
              Favorites={Favorites}
            />
          ))}
        </OutterFavoriteDiv>
      </OutterBox>
    </Fullscreen>
  );
}
