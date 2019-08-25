import React from "react";
import { Link } from "@reach/router";
import Color from "./colors";
import { css, keyframes } from "@emotion/core";

const spin = keyframes`
  to {
    transform: rotate(360deg)
  }
`;

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
        display: inline-block;
        &:hover {
          font-size: 60px;
          animation: 1s ${spin} linear infinite;
        }
      `}
    >
      🐨🦁🐹
    </span>
  </header>
);

export default NavBar;
