const Pet = ({ name, animal, breed }) => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  );
};

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement(
      "h1",
      {},
      "Adopt Us, You Heartless Bastards!",
      React.createElement(Pet, {
        name: "Fifi",
        animal: "Dog",
        breed: "Poodle"
      }),
      React.createElement(Pet, {
        name: "Bonzo",
        animal: "Dog",
        breed: "Boxer"
      }),
      React.createElement(Pet, {
        name: "Fritz",
        animal: "Dog",
        breed: "German Shepherd"
      })
    )
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
