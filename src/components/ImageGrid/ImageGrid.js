import './styles.css';

import React from 'react';
import { connect } from 'react-redux';

const key = '5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';

class ImageGrid extends React.Component {
  state = {
    images: []
  };

  componentDidMount() {
    fetch(`https://api.unsplash.com/photos/?client_id=${key}&per_page=28`)
      .then(res => res.json())
      .then(images => {
        this.setState({
          images: images
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { images } = this.state;
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
      </div>
    );
  }
}

const mapStateToProps = ({ isLoading, images, error }) => ({
  isLoading,
  images,
  error
});

export default connect(
  mapStateToProps,
  null
)(ImageGrid);
