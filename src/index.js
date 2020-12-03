//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>List of Elements</h1>
    <ul>
      <li>Element 1</li>
      <li>Element 2</li>
      <li>Element 3</li>
    </ul>
  </div>,
  document.getElementById("root")
);
