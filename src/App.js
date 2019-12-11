import React from "react";
// import HttpsRedirect from "react-https-redirect";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { createStore } from "./containers/Store";
import Home from "./containers/Home";

function App() {
  return (
    // <HttpsRedirect>
    <Home />
    // </HttpsRedirect>
  );
}

export default createStore(App);
// export default App;
