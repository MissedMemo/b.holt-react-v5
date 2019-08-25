import React, { useState } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import NavBar from "./navbar";
import SearchParams from "./search-params";
import Details from "./details";
import ThemeContext from "./theme-context";

const App = () => {
  const themeHook = useState("darkblue");

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <NavBar />
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
