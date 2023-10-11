// 'use client';

import React, { useState } from 'react';
import { Button, Label, IndividualContainer } from './styles';
import { getProduct, filterProduct } from './helperFunction';

export default function ProductButtons(props: {
  key: number;
  value: string;
  setFiltredProducts: Function;
  content: string;
}) {
  const { key, value, content, setFiltredProducts } = props;
  const [IsClicked, setIsClicked] = useState(false);

  async function applyFilter(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    setIsClicked(!IsClicked);
    const category = e.currentTarget.value;
    console.log(category);

    if (category !== 'All') {
      setFiltredProducts(await filterProduct(category));
    } else {
      setFiltredProducts(await getProduct());
    }
  }

  return (
    <IndividualContainer>
      <Button
        isClicked={IsClicked}
        key={key}
        value={value}
        onClick={e => applyFilter(e)}
      />
      <Label isClicked={IsClicked}>{content}</Label>
    </IndividualContainer>
  );
}
