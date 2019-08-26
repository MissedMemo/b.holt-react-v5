import React, { Component } from "react";

class Carousel extends Component {
  state = {
    photos: [],
    currentIndex: 0
  };

  // extract large-format photos from props...
  static getDerivedStateFromProps({ media }) {
    let photos = ["http://placecorgi.com/600/600"];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }

  handleImageClick = e => {
    this.setState({ currentIndex: +e.target.dataset.index });
  };

  render() {
    const { photos, currentIndex } = this.state;

    return (
      <div className="carousel">
        <img src={photos[currentIndex]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              src={photo}
              onClick={this.handleImageClick}
              data-index={index}
              alt="animal thumbnail"
              className={index === currentIndex ? "active" : ""}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
