import './styles.css';

import React from 'react';
import { connect } from 'react-redux';
import Button from '../Button';

import { loadImages } from '../../actions';

class ImageGrid extends React.Component {
  componentDidMount() {
    this.props.loadImages();
  }

  render() {
    const { isLoading, loadImages, images, error } = this.props;
    return (
      <div className="content">
        <section className="grid">
          {images.map(image => (
            <div
              key={image.id}
              className={`item item-${Math.ceil(image.height / image.width)}`}
            >
              <img src={image.urls.small} alt={image.user.username} />
            </div>
          ))}
        </section>
        {error && <div className="error">JSON.stringify(error)</div>}
        <Button onClick={() => !isLoading && loadImages()} loading={isLoading}>
          Load More
        </Button>
      </div>
    );
  }
}

const mapStateToProps = ({ isLoading, images, error }) => ({
  isLoading,
  images,
  error
});

const mapDispatchToProps = dispatch => ({
  loadImages: () => dispatch(loadImages())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(ImageGrid);
