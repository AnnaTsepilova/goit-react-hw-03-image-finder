import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
import ImageGallery from 'components/ImageGallery/ImageGallery';
// import Modal from 'components/Modal/Modal';

export default class App extends Component {
  static defaultProps = {};

  static propTypes = {
    searchQuery: PropTypes.string,
    page: PropTypes.number,
  };

  state = {
    searchQuery: '',
    page: 1,
  };

  handleFormSubmit = searchQuery => {
    let page = this.state.page;
    if (this.state.searchQuery !== searchQuery) {
      page = 1;
    }
    this.setState({
      searchQuery: searchQuery,
      page: page,
    });
  };

  handleOnClickLoadMoreBtn = event => {
    event.preventDefault();
    let page = this.state.page + 1;
    this.setState({ page });
  };

  render() {
    return (
      <Section>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          searchQuery={this.state.searchQuery}
          page={this.state.page}
          loadMore={this.handleOnClickLoadMoreBtn}
        />
        {/* <Modal /> */}
        <NotificationContainer />
      </Section>
    );
  }
}
