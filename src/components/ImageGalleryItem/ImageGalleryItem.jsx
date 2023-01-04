// import PropTypes from 'prop-types';
import {
  ImageGalleryItemLi,
  ImageGalleryItemImage,
} from 'components/ImageGalleryItem/ImageGalleryItem.styled';

export default function ImageGalleryItem({}) {
  return (
    <ImageGalleryItemLi>
      <ImageGalleryItemImage src="" alt="" />
    </ImageGalleryItemLi>
  );
}

// ImageGalleryItem.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       name: PropTypes.string,
//       number: PropTypes.string,
//     })
//   ).isRequired,
// };
