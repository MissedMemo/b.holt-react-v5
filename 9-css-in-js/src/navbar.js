import React from "react";
import { Link } from "@reach/router";
import { css } from "@emotion/core";

const NavBar = () => (
  <header
    css={css`
      background-color: #333;
      padding: 15px;
    `}
  >
    <Link to="/" className="logo">
      This text ignored... How RUDE!
    </Link>
    <span role="img" aria-label="logo">
      🐨🦁🐹
    </span>
  </header>
);

export default NavBar;
