import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { createStore } from "./containers/Store";
import ReadFilePage from "./containers/ReadFileProject";
import FizzBuzzPage from "./containers/FizzBuzzProject";
import VueDjango from "./containers/VueDjangoProject";
import SnakeMatrixPage from "./containers/SnakeMatrixProject";
import HomePage from "./containers/HomePage";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/readfile" component={ReadFilePage} />
        <Route exact path="/fizzbuzz" component={FizzBuzzPage} />
        <Route exact path="/vue_django" component={VueDjango} />
        <Route exact path="/snake_matrix" component={SnakeMatrixPage} />
      </div>
    </Router>
  );
}

export default createStore(App);
