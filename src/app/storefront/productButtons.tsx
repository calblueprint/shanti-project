// 'use client';

import React from 'react';

import { Button, Label, IndividualContainer } from './styles';

import {
  fetchProducts,
  filterProduct,
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
  } = props;
  const buttons = [
    {
      name: 'All',
      value: 'All',
      count: 0,
    },
    {
      name: 'Dog',
      value: 'Dog',
      count: 1,
    },
    {
      name: 'Cat',
      value: 'Cat',
      count: 2,
    },
    {
      name: 'Other',
      value: 'Other',
      count: 3,
    },
  ];

  async function applyFilter(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    // which button is clicked

    const category = e.currentTarget.value;

    for (let i = 0; i < buttons.length; i += 1) {
      if (buttons[i].value === category) {
        const ind = buttons[i].count;
        if (IsClickedButton[ind] === true) {
          const tempArray = [...IsClickedButton];
          tempArray[ind] = !tempArray[ind];
          tempArray[0] = true;
          setCategoryWord('All');
          setIsClickedButton(tempArray);
        } else {
          const arrayOfFalse = [false, false, false, false];
          arrayOfFalse[ind] = true;
          setCategoryWord(buttons[i].value);
          setIsClickedButton(arrayOfFalse);
        }

        break;
      }
    }

    // Changing the Color of the Button

    // Applying the filter to the categories of the product

    if (category !== 'All') {
      const products = await filterProduct(category);
      if (products !== null) {
        setFiltredProducts(products);
      }
    } else {
      const products = await fetchProducts();
      if (products !== null) {
        setFiltredProducts(products);
      }
    }
  }

  return (
    <IndividualContainer>
      <Button
        $pickColor={IsClickedButton[index]}
        key={key}
        value={value}
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
          applyFilter(e)
        }
      />
      <Label $pickColor={IsClickedButton[index]}>{content}</Label>
    </IndividualContainer>
  );
}
