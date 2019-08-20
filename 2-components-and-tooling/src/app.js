const Pet = ({ name, animal, breed }) =>
  React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);

const App = () =>
  React.createElement("div", {}, [
    React.createElement("a", { class: "logo" }),
    React.createElement("h1", {}, "Let's adopt a cute pet..."),
    React.createElement(Pet, {
      name: "Fido",
      animal: "dog",
      breed: "Pomeranian"
    }),
    React.createElement(Pet, {
      name: "Fluff",
      animal: "cat",
      breed: "Siamese"
    }),
    React.createElement(Pet, {
      name: "Squawk",
      animal: "bird",
      breed: "Parrot"
    })
  ]);

ReactDOM.render(React.createElement(App), document.getElementById("root"));
