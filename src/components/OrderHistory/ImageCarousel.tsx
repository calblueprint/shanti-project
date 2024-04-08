/* eslint-disable react/no-array-index-key */
import React from 'react';
import { GalleryContainer, ImageContainer, GalleryImage } from './styles';

interface ImageGalleryProps {
  images: string[]; // Array of image URLs
}

export default function ImageGallery(props: ImageGalleryProps) {
  const { images } = props;

  return (
    <GalleryContainer>
      {images.map((image, index) => (
        <ImageContainer key={index}>
          <GalleryImage src={image} alt={`Gallery item ${index + 1}`} />
        </ImageContainer>
      ))}
    </GalleryContainer>
  );
}
