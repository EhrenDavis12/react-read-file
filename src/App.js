import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/readfile" element={<ReadFilePage />} />
          <Route exact path="/fizzbuzz" element={<FizzBuzzPage />} />
          <Route exact path="/vue_django" element={<VueDjangoPage />} />
          <Route exact path="/snake_matrix" element={<SnakeMatrixPage />} />
          <Route exact path="/consume_api" element={<ConsumeApiPage />} />
          <Route exact path="/travel_plans" element={<TravelPlansPage />} />
          <Route exact path="/ready_to_go" element={<ReadyToGoPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default createStore(App);
