import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { createStore } from "./containers/Store";
import ReadFilePage from "./containers/ReadFileProject";
import FizzBuzzPage from "./containers/FizzBuzzProject";
import VueDjangoPage from "./containers/VueDjangoProject";
import SnakeMatrixPage from "./containers/SnakeMatrixProject";
import ConsumeApiPage from "./containers/ConsumeApiProject";
import TravelPlansPage from "./containers/TravelPlansProject";
import ReadyToGoPage from "./containers/ReadyToGo";
import HomePage from "./containers/HomePage";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/readfile" component={ReadFilePage} />
        <Route exact path="/fizzbuzz" component={FizzBuzzPage} />
        <Route exact path="/vue_django" component={VueDjangoPage} />
        <Route exact path="/snake_matrix" component={SnakeMatrixPage} />
        <Route exact path="/consume_api" component={ConsumeApiPage} />
        <Route exact path="/travel_plans" component={TravelPlansPage} />
        <Route exact path="/ready_to_go" component={ReadyToGoPage} />
      </div>
    </Router>
  );
}

export default createStore(App);
