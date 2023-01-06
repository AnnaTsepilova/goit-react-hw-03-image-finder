import PropTypes from 'prop-types';
import {
  ImageGalleryItemLi,
  ImageGalleryItemImage,
} from 'components/ImageGalleryItem/ImageGalleryItem.styled';

export default function ImageGalleryItem({ image }) {
  // console.log(image);
  // console.log(typeof image);
  return (
    <ImageGalleryItemLi>
      <ImageGalleryItemImage src={image.webformatURL} alt={image.tags} />
    </ImageGalleryItemLi>
  );
}

ImageGalleryItem.propTypes = {
  image: PropTypes.objectOf(
    PropTypes.shape({
      webformatURL: PropTypes.string,
      tags: PropTypes.string,
    })
  ).isRequired,
};
