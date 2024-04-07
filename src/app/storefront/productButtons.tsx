// 'use client';

import React from 'react';

import { fetchButtonCategories } from '@/api/supabase/queries/button_queries';
import { Button, Label, IndividualContainer } from './styles';

import {
  fetchUserProducts,
  filterUserProducts,
} from '../../api/supabase/queries/product_queries';

import { Product } from '../../schema/schema';

export default function ProductButtons(props: {
  value: string;
  setFiltredProducts: (category: Product[]) => void;
  content: string;
  setCategoryWord: (word: string) => void;
  index: number;
  id: number;
  setClickedButton: (clicked: number) => void;
  clickedButton: number;
}) {
  const {
    value,
    content,
    setFiltredProducts,
    id,
    setCategoryWord,
    index,
    setClickedButton,
    clickedButton,
  } = props;

  async function applyFilter(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    // which button is clicked

    const category = e.currentTarget.value;
    const productItem = await fetchUserProducts();
    const buttonCategories = await fetchButtonCategories();

    for (let i = 0; i < buttonCategories.length; i += 1) {
      if (buttonCategories[i].name === category) {
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
        setCategoryWord(buttonCategories[i].name);
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
        $pickColor={index === clickedButton}
        key={id}
        value={value}
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
          applyFilter(e)
        }
      />
      <Label $pickColor={index === clickedButton}>{content}</Label>
    </IndividualContainer>
  );
}
