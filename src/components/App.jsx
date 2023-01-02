import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
// NotificationManager.info('Info message');
// NotificationManager.success('Success message', 'Title here');
//NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
//NotificationManager.error('Error message', 'Click me!', 5000, () => { alert('callback'); });

import Section from 'components/Section/Section';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';

class App extends Component {
  static defaultProps = {};

  static propTypes = {
    // contacts: PropTypes.array,
    // filter: PropTypes.string,
  };

  state = {
    // contacts: initialContacts,
    // filter: '',
  };

  render() {
    return (
      <Section>
        <Searchbar />
        {/* <ImageGallery /> */}
        <Loader />
        <Button />
        {/* <Modal /> */}
      </Section>
    );
  }
}

export default App;
