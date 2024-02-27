'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
<<<<<<< HEAD
=======
import { Body2 } from '@/styles/fonts';
>>>>>>> 868ec15529959f9fb270c1a2eb9a43342d4495c2
import BackButton from '../../components/BackButton/BackButton';

<<<<<<< HEAD
=======

>>>>>>> d6b21dd (feat: action on hover of heart button and view item button)
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
  ViewItem,
} from './styles';

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
                <ViewItem onClick={() => router.push(`/${favorite.id}`)}>
                  <Body2>View Item</Body2>
                </ViewItem>
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
