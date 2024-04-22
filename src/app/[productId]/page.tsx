'use client';

import { useEffect, useState } from 'react';
import { convertButtonNumberToCategory } from '@/api/supabase/queries/button_queries';
import { Body1, Heading1, Body2Light, Body2Bold, Body3 } from '@/styles/fonts';
import {
  fetchProductByID,
  fetchUserProducts,
} from '@/api/supabase/queries/product_queries';
import BackButton from '@/components/BackButton/BackButton';
import 'react-toastify/dist/ReactToastify.css';

import {
  ImageContainer,
  TextContainer,
  DescriptionContainer,
  ToastPopUP,
  Fullscreen,
  LeftColumnDiv,
  FavoritePopup,
  HeartContainer,
  HeartIcon,
  TopRightContainer,
} from './styles';
import {
  addOrRemoveProductFromFavorite,
  fetchUser,
} from '../../api/supabase/queries/user_queries';
import NavBar from '../../components/NavBarFolder/NavBar';
import { Product, User } from '../../schema/schema';
import Buttons from './Buttons';

export default function ItemDisplay({
  params,
}: {
  params: { productId: number };
}) {
  const [Item, setItem] = useState<Product>();
  const [IsFavorite, setIsFavorite] = useState(false);
  const [FilteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetchProductByID(params.productId);
        response.category = await convertButtonNumberToCategory(
          response.category,
        );
        const data = (await fetchUserProducts()) as Product[];
        const user = (await fetchUser()) as User;
        if (user == undefined || user.fav_items == undefined) return;
        setIsFavorite(
          !!user.fav_items.find(item => item === Number(params.productId)),
        );
        if (response) {
          setItem(response);
          setFilteredProducts(data);
        }
      } catch (error) {
        // console.error(error);
      }
    }

    fetchProducts();
  }, []);

  async function handleFavorite() {
    await addOrRemoveProductFromFavorite(
      await fetchProductByID(params.productId),
      !IsFavorite,
    );
    setIsFavorite(!IsFavorite);
  }

  return (
    <Fullscreen>
      <NavBar />
      <ToastPopUP
        position="top-right"
        autoClose={500}
        limit={1}
        hideProgressBar
      />

      <DescriptionContainer>
        <LeftColumnDiv>
          <BackButton destination="./storefront" />
          <ImageContainer>
            <img
              src={Item?.photo}
              alt={Item?.name}
              style={{ width: '400px', height: '400px', objectFit: 'cover' }}
            />
          </ImageContainer>
        </LeftColumnDiv>
        <TextContainer>
          <TopRightContainer>
            <Heading1>{Item?.name}</Heading1>
            <HeartContainer onClick={() => handleFavorite()}>
              <FavoritePopup>
                <Body3>
                  {IsFavorite ? 'Remove from favorites' : 'Add to favorites'}
                </Body3>
              </FavoritePopup>
              <HeartIcon $favorited={IsFavorite} />
            </HeartContainer>
          </TopRightContainer>
          <Body1 style={{ fontWeight: 'normal', paddingTop: '5px' }}>
            <b>Category:</b> {Item?.category}
          </Body1>
          <Buttons productNumber={params.productId} />
          <Body2Bold style={{ paddingTop: '40px' }}>Product Details:</Body2Bold>
          <Body2Light style={{ paddingTop: '20px' }}>
            {Item?.description}
          </Body2Light>
        </TextContainer>
      </DescriptionContainer>
    </Fullscreen>
  );
}
