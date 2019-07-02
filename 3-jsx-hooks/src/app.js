import React from "react";
import { render } from "react-dom";
import { Pet } from "./pet.jsx";

const App = () => (
  <div>
    <h1>Adopt Us, You Heartless Bastards!</h1>
    <Pet name="Fifi" animal="Dog" breed="Poodle" />
    <Pet name="Polly" animal="Bird" breed="Parrot" />
    <Pet name="Fluff" animal="Cat" breed="Siamese" />
  </div>
);

render(<App />, document.getElementById("root"));
