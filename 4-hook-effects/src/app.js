import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import SearchParams from "./search-params.jsx";
import Details from "./details.jsx";

const App = () => (
  <React.StrictMode>
    <div>
      <header>
        <Link to="/">Adopt Us, You Heartless Bastards!</Link>
      </header>
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  </React.StrictMode>
);

render(<App />, document.getElementById("root"));
