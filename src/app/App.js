import "./App.css";

import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./home/home";

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/about">
            <h1>about</h1>
          </Route>
          <Route path="/contact">
            <h1>Contact</h1>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
