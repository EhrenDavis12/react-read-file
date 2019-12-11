import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { createStore } from "./containers/Store";
import Home from "./containers/Home";

function App() {
  return <Home />;
}

export default createStore(App);
