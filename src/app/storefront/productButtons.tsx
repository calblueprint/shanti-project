import React from 'react';

import { fetchButtonCategories } from '@/api/supabase/queries/button_queries';
import {
  CategoryButton,
  CategoryButtonLabel,
  IndividualContainer,
} from './styles';

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
  setClickedButton: (clicked: number) => void;
  clickedButton: number;
}) {
  const {
    value,
    content,
    setFiltredProducts,
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
          setCategoryWord('All');

          setClickedButton(0);

          if (productItem !== null) {
            setFiltredProducts(productItem);
          }
          return;
        }
        setClickedButton(ind);

        setCategoryWord(buttonCategories[i].name);

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
      <CategoryButton
        $selected={index === clickedButton}
        key={value}
        onClick={e => applyFilter(e)}
      />
      <CategoryButtonLabel $selected={index === clickedButton}>
        {content}
      </CategoryButtonLabel>
    </IndividualContainer>
  );
}
