import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter as Router, Route } from "react-router-dom";

import { createStore } from "./containers/Store";
import ReadFileProject from "./containers/ReadFileProject";

function App() {
  return <ReadFileProject />;
}

export default createStore(App);
