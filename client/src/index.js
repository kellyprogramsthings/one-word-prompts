import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "./css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Warning: React does not recognize the `editComponent` prop on a DOM element. 
// If you intentionally want it to appear in the DOM as a custom attribute,
// spell it as lowercase `editcomponent` instead. If you accidentally passed 
// it from a parent component, remove it from the DOM element.

ReactDOM.render(
  <React.StrictMode>
    <App />,
  </React.StrictMode>,
  document.getElementById("root")
);