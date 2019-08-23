import React, { Component } from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./carousel";
import ErrorBoundary from "./error-boundary";
import ThemeContext from "./theme-context";
import { navigate } from "@reach/router";
import Modal from "./modal";

class Details extends Component {
  state = {
    loading: true,
    showModal: false
  };

  componentDidMount() {
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        name: animal.name,
        animal: animal.type,
        url: animal.url,
        location: `${animal.contact.address.city} - ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false
      });
    }, console.error);
  }

  toggleModal = () => {
    const showModal = !this.state.showModal;
    this.setState({ showModal });
  };

  adopt = () => {
    navigate(this.state.url);
  };

  render() {
    // throw Error("lol"); // uncomment to test error boundary...

    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }

    const {
      name,
      animal,
      location,
      description,
      media,
      breed,
      showModal
    } = this.state;

    return (
      <div className="details">
        <div>
          <Carousel media={media} />
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              // note array DESTRUCTURING (pulls out ThemeContext[0])
              <button
                onClick={this.toggleModal}
                style={{ backgroundColor: theme }}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {name} ?</h1>
                <div className="buttons">
                  <button onClick={this.adopt}>Yes!</button>
                  <button onClick={this.toggleModal}>No</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

export default function SafeDetails(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
