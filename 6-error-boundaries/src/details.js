import React, { Component } from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./carousel";
import ErrorBoundary from "./error-boundary";

class Details extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city} - ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false
      });
    }, console.error);
  }

  render() {
    // throw Error("lol"); // uncomment to test error boundary...

    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }

    const { name, animal, location, description, media, breed } = this.state;

    return (
      <div className="details">
        <div>
          <Carousel media={media} />
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
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
