import React from "react";
import "./App.css";

import { createStore } from "./containers/Store";
import Home from "./containers/Home";

function App() {
  return <Home />;
}

export default createStore(App);
// export default App;
