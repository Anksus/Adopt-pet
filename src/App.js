import React from "react";
import { render } from "react-dom";
// import Pet from "./pet";
import SearchParams from "./SearchParams";

const App = () => {
  //   return React.createElement("div", {}, [
  //     React.createElement("h1", {}, "Adopt Me!"),
  //     React.createElement(Pet, {
  //       name: "john",
  //       animal: "cat",
  //       bread: "Russian cat",
  //     }),
  //     React.createElement(Pet, {
  //       name: "hamm",
  //       animal: "horse",
  //       bread: "pony",
  //     }),
  //   ]);

  // <div> basically means createElement with div in it in JSX
  return (
    <div>
      <h1>Adopt Me!</h1>
      {/* <Pet name="Luna" animal="dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Doink" animal="Cat" breed="Mixed" /> */}
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
