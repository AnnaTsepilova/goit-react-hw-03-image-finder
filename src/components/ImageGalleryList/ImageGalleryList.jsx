import PropTypes from 'prop-types';

import { ImageGalleryContainer } from 'components/ImageGallery/ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export default function ImageGalleryList({ images }) {
  //   console.log(images);
  //   console.log(typeof images);
  return (
    <ImageGalleryContainer>
      {images.map(image => {
        return (
          <ImageGalleryItem key={image.id} image={image}></ImageGalleryItem>
        );
      })}
    </ImageGalleryContainer>
  );
}

ImageGalleryList.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    })
  ).isRequired,
};
