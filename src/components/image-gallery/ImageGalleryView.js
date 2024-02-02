import React from 'react';
import { imagesData } from '../../helper/DataConstants';
import ImageGallery from './ImageGallery';

const ImageGalleryView = () => {
  return <ImageGallery images={imagesData} />;
};

export default ImageGalleryView;
