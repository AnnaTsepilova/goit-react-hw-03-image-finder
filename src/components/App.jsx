import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { nanoid } from 'nanoid';
import {
  NotificationContainer,
  // NotificationManager,
} from 'react-notifications';
// NotificationManager.info('Info message');
// NotificationManager.success('Success message', 'Title here');
//NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
//NotificationManager.error('Error message', 'Click me!', 5000, () => { alert('callback'); });

import Section from 'components/Section/Section';
import Searchbar from 'components/Searchbar/Searchbar';
// import ImageGallery from 'components/ImageGallery/ImageGallery';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';
// import Modal from 'components/Modal/Modal';

export default class App extends Component {
  static defaultProps = {};

  static propTypes = {
    // contacts: PropTypes.array,
    // filter: PropTypes.string,
  };

  state = {
    searchQuery: '',
  };

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
    console.log(this.state.searchQuery);
  };

  // componentDidMount() {
  //   this.setState({ loading: true });
  //   fetch(
  //     'https://pixabay.com/api/?q=cat&page=1&key=31882982-4157c5a40df977384753c9618&image_type=photo&orientation=horizontal&per_page=12'
  //   )
  //     .then(res => res.json())
  //     .then(photos => this.setState({ photos }))
  //     .finally(() => this.setState({ loading: false }));
  // }

  render() {
    return (
      <Section>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {/* <ImageGallery /> */}
        <Loader />
        <Button />
        {/* <Modal /> */}
        <NotificationContainer />
      </Section>
    );
  }
}
