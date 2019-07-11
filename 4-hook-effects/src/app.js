import React from "react";
import { render } from "react-dom";
import SearchParams from "./search-params.jsx";

const App = () => (
  <div>
    <h1>Adopt Us, You Heartless Bastards!</h1>
    <SearchParams />
  </div>
);

render(<App />, document.getElementById("root"));
