import React from "react";
import { render } from "react-dom";
import SearchParams from "./search-params.jsx";

const App = () => (
  <React.StrictMode>
    <div>
      <h1>Adopt Us, You Heartless Bastards!</h1>
      <SearchParams />
    </div>
  </React.StrictMode>
);

render(<App />, document.getElementById("root"));
