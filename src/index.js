import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import Bootstrap from "bootstrap/dist/css/bootstrap.css"
const title = "Pokémon";

ReactDOM.render(
  <App title={title}  />,
  document.getElementById("root")
);
registerServiceWorker();