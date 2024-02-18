'use client';

import { useState, useEffect } from 'react';
import BackButton from '../../components/BackButton/BackButton';

import {
  arrayOfFavorites,
  addOrRemoveProductFromFavorite,
} from '../../api/supabase/queries/user_queries';

import NavBar from '../../components/NavBarFolder/NavBar';

import {
  FavoriteDiv,
  OutterFavoriteDiv,
  GlobalStyle,
  OutterBox,
  ProductNameDiv,
  HeartIcon,
  TransparentButton,
} from './styles';

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

  async function clickFunctions(props: { fav: Product }) {
    const { fav } = props;
    addOrRemoveProductFromFavorite(fav, false);
    setFavorites(Favorites.filter(Prod => Prod.id !== fav.id));
  }

  return (
    <div>
      <NavBar />
      <GlobalStyle />
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
                <p>
                  {favorite.name}
                  <br />
                  Product ID: {favorite.id}
                </p>
              </ProductNameDiv>
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
