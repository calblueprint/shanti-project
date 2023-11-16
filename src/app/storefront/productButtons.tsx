// 'use client';

import React, { useState } from 'react';

import { Button, Label, IndividualContainer } from './styles';

import {
  getProduct,
  filterProduct,
} from '../../api/supabase/queries/user_queries';

import { Product } from '../../schema/schema';

export default function ProductButtons(props: {
  key: number;
  value: string;
  setFiltredProducts: (category: Product[]) => void;
  content: string;
}) {
  const { key, value, content, setFiltredProducts } = props;
  const [IsClicked, setIsClicked] = useState(false);

  async function applyFilter(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    setIsClicked(!IsClicked);
    const category = e.currentTarget.value;
    if (category !== 'All') {
      const products = await filterProduct(category);
      if (products !== null) {
        setFiltredProducts(products);
      }
    } else {
      const products = await getProduct();
      if (products !== null) {
        setFiltredProducts(products);
      }
    }
  }

  return (
    <IndividualContainer>
      <Button
        isClicked={IsClicked}
        key={key}
        value={value}
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
          applyFilter(e)
        }
      />
      <Label isClicked={IsClicked}>{content}</Label>
    </IndividualContainer>
  );
}
