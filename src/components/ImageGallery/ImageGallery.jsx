// import PropTypes from 'prop-types';
import { NotificationManager } from 'react-notifications';
import { ImageGalleryContainer } from 'components/ImageGallery/ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ photos }) {
  return (
    <ImageGalleryContainer>
      {photos.length
        ? photos.map(photo => {
            return (
              <ImageGalleryItem key={photo.id}>
                {/* <Text>
                {contact.name}: {contact.number}
              </Text>
              <DeleteButton
                type="button"
                onClick={() => {
                  onDelete(contact.id);
                }}
              >
                Delete
              </DeleteButton> */}
              </ImageGalleryItem>
            );
          })
        : NotificationManager.info(
            'Sorry, there are no images matching your search query. Please try again.',
            3000
          )}
      <ImageGalleryItem />
    </ImageGalleryContainer>
  );
}

// ImageGallery.propTypes = {
//   photos: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number,
//       name: PropTypes.string,
//       number: PropTypes.string,
//     })
//   ).isRequired,
// };
