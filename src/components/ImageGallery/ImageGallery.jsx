import { Component } from 'react';
import { NotificationManager } from 'react-notifications';
import { animateScroll as scroll } from 'react-scroll';
import PropTypes from 'prop-types';

import ImageGalleryList from 'components/ImageGalleryList/ImageGalleryList';
import Loader from 'components/Loader/Loader';
import FetchImages from 'api/Api';
import Button from 'components/Button/Button';

export default class ImageGallery extends Component {
  static propTypes = {
    images: PropTypes.array,
    isLoading: PropTypes.bool,
    error: PropTypes.bool,
    status: PropTypes.string,
  };

  state = {
    images: [],
    isLoading: false,
    error: null,
    status: 'pending',
  };

  async componentDidUpdate(prevProps, prevState) {
    let searchQuery = this.props.searchQuery;
    let page = this.props.page;

    if (searchQuery !== prevProps.searchQuery || page !== prevProps.page) {
      try {
        this.setState({ isLoading: true });

        const response = await FetchImages(searchQuery, page);

        if (searchQuery !== prevProps.searchQuery) {
          this.setState({
            images: response.data.hits,
            isLoading: false,
          });
        } else {
          this.setState({
            images: [...prevState.images, ...response.data.hits],
            isLoading: false,
          });
        }

        if (!response.data.hits.length) {
          NotificationManager.error(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }
      } catch (error) {
        NotificationManager.error(`API error: ${error.message}`);
        this.setState({ isLoading: false });
      }
    }
    if (this.state.images.length > 12) {
      scroll.scrollToBottom();
    } else {
      scroll.scrollToTop();
    }
  }

  render() {
    const { images, isLoading, status } = this.state;

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'resolved') {
      return (
        <>
          <ImageGalleryList images={images} />
          <Button onClick={this.props.loadMore} />
        </>
      );
    }

    if (status === 'rejected') {
      return NotificationManager.error(`API error: server is not available`);
    }

    // return (
    //   <>
    //     <ImageGalleryList images={images} />
    //     {isLoading && <Loader />}
    //     {images.length > 0 && <Button onClick={this.props.loadMore} />}
    //   </>
    // );
  }
}
