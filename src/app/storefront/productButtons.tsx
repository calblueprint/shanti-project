// 'use client';

import React from 'react';

import { fetchButoonCategories } from '@/api/supabase/queries/button_queries';
import { Button, Label, IndividualContainer } from './styles';

import {
  fetchUserProducts,
  filterUserProducts,
} from '../../api/supabase/queries/product_queries';

import { Product } from '../../schema/schema';

export default function ProductButtons(props: {
  key: number;
  value: string;
  setFiltredProducts: (category: Product[]) => void;
  content: string;
  setIsClickedButton: (clicked: boolean[]) => void;
  IsClickedButton: boolean[];
  setCategoryWord: (word: string) => void;
  index: number;
  setClickedButton: (clicked: number) => void;
  clickedButton: number;
}) {
  const {
    key,
    value,
    content,
    setFiltredProducts,
    setIsClickedButton,
    IsClickedButton,
    setCategoryWord,
    index,
    setClickedButton,
    clickedButton
  } = props;

  async function applyFilter(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    // which button is clicked

    const category = e.currentTarget.value;
    const productItem = await fetchUserProducts();
    const buttonCategories = await fetchButoonCategories();

    for (let i = 0; i < buttonCategories.length; i += 1) {
      if (buttonCategories[i].value === category) {
        const ind = buttonCategories[i].id - 1;
        if (ind === clickedButton) {
          // const tempArray = [...IsClickedButton];
          // tempArray[ind] = !tempArray[ind];
          // tempArray[0] = true;
          setCategoryWord('All');
          // setIsClickedButton(tempArray);
          setClickedButton(0);

          if (productItem !== null) {
            setFiltredProducts(productItem);
          }
          return;
        }
        setClickedButton(ind);
        // const arrayOfFalse = [false, false, false, false];
        // arrayOfFalse[ind] = true;
        setCategoryWord(buttonCategories[i].value);
        // setIsClickedButton(arrayOfFalse);

        break;
      }
    }

    // Changing the Color of the Button

    // Applying the filter to the categories of the product

    if (category !== 'All') {
      const products = await filterUserProducts(category);
      if (products !== null) {
        setFiltredProducts(products);
      }
    } else {
      const products = await fetchUserProducts();
      if (products !== null) {
        setFiltredProducts(products);
      }
    }
  }

  return (
    <IndividualContainer>
      <Button
        $pickColor={index===clickedButton}
        key={key}
        value={value}
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
          applyFilter(e)
        }
      />
      <Label $pickColor={index===clickedButton}>{content}</Label>
    </IndividualContainer>
  );
}
