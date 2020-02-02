import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { createStore } from "./containers/Store";
import ReadFilePage from "./containers/ReadFileProject";
import FizzBuzzPage from "./containers/FizzBuzzProject";
import VueDjango from "./containers/VueDjangoProject";
import HomePage from "./containers/HomePage";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/readfile" component={ReadFilePage} />
        <Route exact path="/fizzbuzz" component={FizzBuzzPage} />
        <Route exact path="/VueDjango" component={VueDjango} />
      </div>
    </Router>
  );
}

export default createStore(App);
