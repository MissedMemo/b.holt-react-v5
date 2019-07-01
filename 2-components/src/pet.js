import { createElement } from "react";

export const Pet = ({ name, animal, breed }) => {
  return createElement(
    "div",
    {},
    createElement("h1", {}, name),
    createElement("h2", {}, animal),
    createElement("h2", {}, breed)
  );
};
