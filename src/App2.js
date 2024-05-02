// App.js

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Usage from "./Usage";
import Dev from "./Dev";
import NotFound from "./NotFound";

const App2 = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/usage" component={Usage} />
          <Route path="/dev" component={Dev} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App2;
