import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  SearchbarContainer,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from 'components/Searchbar/Searchbar.styled';

class Searchbar extends Component {
  static defaultProps = {};

  static propTypes = {
    // contacts: PropTypes.array,
    // name: PropTypes.string,
    // number: PropTypes.string,
  };

  state = {
    // contacts: [],
    // name: '',
    // number: '',
  };

  render() {
    return (
      <SearchbarContainer>
        <SearchForm>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchbarContainer>
    );
  }
}

export default Searchbar;
