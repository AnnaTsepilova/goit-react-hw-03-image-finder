import PropTypes from 'prop-types';
import { ButtonLoadMore } from 'components/Button/Button.styled';

export default function Button({}) {
  return <ButtonLoadMore>Load more</ButtonLoadMore>;
}

// Button.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       name: PropTypes.string,
//       number: PropTypes.string,
//     })
//   ).isRequired,
// };
