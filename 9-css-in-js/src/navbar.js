import React from "react";
import { Link } from "@reach/router";
import Color from "./colors";
import { css } from "@emotion/core";

const NavBar = () => (
  <header
    css={css`
      background-color: ${Color.primary};
      padding: 15px;
    `}
  >
    <Link to="/" className="logo">
      This text ignored... How RUDE!
    </Link>
    <span
      role="img"
      aria-label="logo"
      css={css`
        font-size: 40px;
        &:hover {
          font-size: 60px;
        }
      `}
    >
      🐨🦁🐹
    </span>
  </header>
);

export default NavBar;
