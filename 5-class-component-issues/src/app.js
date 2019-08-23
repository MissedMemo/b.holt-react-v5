import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import SearchParams from "./search-params";
import Details from "./details";

const App = () => (
  <React.StrictMode>
    <div>
      <header>
        <Link to="/">
          <div className="logo" />
        </Link>
        <h1 className="tagline">- Let&apos;s adopt a cute pet !</h1>
      </header>
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  </React.StrictMode>
);

render(<App />, document.getElementById("root"));
