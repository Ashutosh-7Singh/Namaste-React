import React from "react"
import ReactDOM from "react-dom/client"
const newLocal = "I am in h1 tag";
const parent = React.createElement(
    "div",
    { id: "parent" },
   [ React.createElement(
      "div",
      { id: "child" },
    [  React.createElement("h1", {}, "this is namaste react  ❤️"), React.createElement("h2", {}, "I am in h2 tag")]
    ),
    React.createElement(
        "div",
        { id: "child2" },
      [  React.createElement("h1", {}, newLocal), React.createElement("h2", {}, "I am in h2 tag")]
      )]
  );
  
  console.log(parent);
  
  const root = ReactDOM.createRoot(document.getElementById("container"));
  root.render(parent);
  