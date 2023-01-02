import PropTypes from 'prop-types';
import { ImageGalleryContainer } from 'components/ImageGallery/ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({}) {
  return (
    <ImageGalleryContainer>
      <ImageGalleryItem />
    </ImageGalleryContainer>
  );
}

// ImageGallery.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       name: PropTypes.string,
//       number: PropTypes.string,
//     })
//   ).isRequired,
// };
