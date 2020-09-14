import React from "react";
import { render } from "react-dom";
import Pet from "./pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "john",
      animal: "cat",
      bread: "Russian cat",
    }),
    React.createElement(Pet, {
      name: "hamm",
      animal: "horse",
      bread: "pony",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
