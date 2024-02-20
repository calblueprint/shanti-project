/* eslint-disable react/no-array-index-key */
import React from 'react';

interface ImageGalleryProps {
  images: string[]; // Array of image URLs
}

export default function ImageGallery(props: ImageGalleryProps) {
  const { images } = props;

  return (
    <div
      style={{
        display: 'flex',
        overflowX: 'auto',
        gap: '10px', // Adjust the space between images as needed
        padding: '10px', // Add padding around the images container
      }}
    >
      {images.map((image, index) => (
        <div
          key={index}
          style={{
            flex: '0 0 auto', // This ensures that the divs containing images don't shrink or grow
          }}
        >
          <img
            src={image}
            alt={`Gallery item ${index + 1}`}
            style={{
              maxHeight: '100px', // Adjust based on your requirement
              maxWidth: '100%', // This makes image responsive within the div
              display: 'block', // Remove extra space below the image
            }}
          />
        </div>
      ))}
    </div>
  );
}
