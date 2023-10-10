'use client';
import { Button, Label, IndividualContainer } from './styles';
import { getProduct, filterProduct } from './helperFunction';
import React from 'react';
import { useState } from 'react';
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
    let category = e.currentTarget.value;
    console.log(category);
    category != 'All'
      ? setFiltredProducts(await filterProduct(category))
      : setFiltredProducts(await getProduct());
  }
  {
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
}
