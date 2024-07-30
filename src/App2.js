// App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Usage from "./Usage";
import Dev from "./Dev";
import NotFound from "./NotFound";
// import Navbar from "./Partials/Navbar";

const App2 = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/usage" component={Usage} />
            <Route path="/dev" component={Dev} />
            <Route component={NotFound} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App2;
