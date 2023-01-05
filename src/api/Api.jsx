import PropTypes from 'prop-types';
import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
export default async function FetchImages(searchQuery, page) {
  const response = await axios.get(
    `?q=${searchQuery}&page=${page}&key=31882982-4157c5a40df977384753c9618&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response;
}

FetchImages.propTypes = {
  searchQuery: PropTypes.string,
  page: PropTypes.number.isRequired,
};
