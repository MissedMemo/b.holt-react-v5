import React from "react";
import { render } from "react-dom";
import SearchParams from "./search-params";

const App = () => (
  <div>
    <div className="logo" />
    <h1>Let&apos;s adopt a pet!</h1>
    <SearchParams />
  </div>
);

render(<App />, document.getElementById("root"));
