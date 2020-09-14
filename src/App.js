const pet = ({ name, animal, bread }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, bread),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(pet, {
      name: "john",
      animal: "cat",
      bread: "Russian cat",
    }),
    React.createElement(pet, {
      name: "hamm",
      animal: "horse",
      bread: "pony",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
