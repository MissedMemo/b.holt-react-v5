import React from "react";
import { render } from "react-dom";
import { Pet } from "./pet";

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement(
      "h1",
      {},
      "Adopt Us, You Heartless Bastards!",
      React.createElement(Pet, {
        name: "Fifi",
        animal: "Dog",
        breed: "Poodle"
      }),
      React.createElement(Pet, {
        name: "Fido",
        animal: "Dog",
        breed: "Boxer"
      }),
      React.createElement(Pet, {
        name: "Fritz",
        animal: "Dog",
        breed: "German Shepherd"
      })
    )
  );
};

render(React.createElement(App), document.getElementById("root"));
