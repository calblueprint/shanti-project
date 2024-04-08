'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Body1Bold, Body2, Body3 } from '@/styles/fonts';
import BackButton from '../../components/BackButton/BackButton';

import {
  arrayOfFavorites,
  addOrRemoveProductFromFavorite,
} from '../../api/supabase/queries/user_queries';

import NavBar from '../../components/NavBarFolder/NavBar';

import {
  FavoriteDiv,
  OutterFavoriteDiv,
  OutterBox,
  ProductNameDiv,
  HeartIcon,
  TransparentButton,
  ViewItem,
  Fullscreen,
  Hover,
} from './styles';

import { Product } from '../../schema/schema';

export default function FavoritesPage() {
  const [Favorites, setFavorites] = useState<Product[]>([]);
  const router = useRouter();
  const [hovering, setHovering] = useState(false);

  async function fetchProducts() {
    const data = (await arrayOfFavorites()) as Product[];
    setFavorites(data);
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  async function clickFunctions(props: { fav: Product }) {
    const { fav } = props;
    addOrRemoveProductFromFavorite(fav, false);
    setFavorites(Favorites.filter(Prod => Prod.id !== fav.id));
  }

  return (
    <Fullscreen>
      <NavBar />
      <OutterBox>
        <BackButton destination="./profileScreen" />
        <h1>Favorites</h1>
        <OutterFavoriteDiv>
          {Favorites.map(favorite => (
            <FavoriteDiv key={favorite.id}>
              <img
                src={favorite.photo}
                alt={favorite.name}
                style={{ width: '150px', height: '150px' }}
              />

              <ProductNameDiv>
                <Body1Bold>{favorite.name}</Body1Bold>
                <Body2>Category: {favorite.category}</Body2>
                <ViewItem onClick={() => router.push(`/${favorite.id}`)}>
                  <Body2>View Item</Body2>
                </ViewItem>
              </ProductNameDiv>

              <TransparentButton
                onClick={() => clickFunctions({ fav: favorite })}
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
              >
                <Hover $ishovering={hovering}>
                  <Body3>Remove from favorites</Body3>
                </Hover>
                <HeartIcon />
              </TransparentButton>
            </FavoriteDiv>
          ))}
        </OutterFavoriteDiv>
      </OutterBox>
    </Fullscreen>
  );
}
