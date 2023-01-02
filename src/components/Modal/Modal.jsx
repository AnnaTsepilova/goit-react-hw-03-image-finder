import PropTypes from 'prop-types';
import { Overlay, ModalWindow } from 'components/Modal/Modal.styled';

export default function Modal({}) {
  return (
    <Overlay>
      <ModalWindow>
        <img src="" alt="" />
      </ModalWindow>
    </Overlay>
  );
}

// Modal.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       name: PropTypes.string,
//       number: PropTypes.string,
//     })
//   ).isRequired,
// };
