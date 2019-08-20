import React from "react";
import { render } from "react-dom";
import Pet from "./pet";

const App = () => (
  <div>
    <div className="logo" />
    <h1>Let&apos;s adopt a pet!</h1>
    <Pet name="Fido" animal="dog" breed="Pomeranian" />
    <Pet name="Fluffy" animal="cat" breed="Siamese" />
    <Pet name="Eduardo" animal="bird" breed="Parrot" />
  </div>
);

render(<App />, document.getElementById("root"));
