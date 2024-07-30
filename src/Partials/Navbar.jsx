import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./Navbar.css";
import Home from "../Home";
import About from "../About";
import Usage from "../Usage";
import Dev from "../Dev";
import NotFound from "../NotFound";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <nav className="navbar">
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className={isOpen ? "dash open" : "dash"}></div>
          <div className={isOpen ? "dash open" : "dash"}></div>
          <div className={isOpen ? "dash open" : "dash"}></div>
        </div>
        <ul className={isOpen ? "open" : ""}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="http://wci-spintex.netlify.app/usage.html">Usage</a>
          </li>
          <li>
            <a href="http://wci-spintex.netlify.app/about.html">About</a>
          </li>
          <li>
            <a href="http://wci-spintex.netlify.app/contact.html">Contact</a>
          </li>

          {/* <li>
            <Link to="/about">About</Link>
          </li> */}
          {/* <li>
            <Link to="/usage">Usage</Link>
          </li> */}
          {/* <li>
            <Link to="/dev">Contact Dev</Link>
          </li> */}
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" component={<Home />} />
        <Route path="/about" component={<About />} />
        <Route path="/usage" component={<Usage />} />
        <Route path="/dev" component={<Dev />} />
        <Route component={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Link } from "react-router-dom";
// import "./Navbar.css";
// import Home from "../Home";
// import About from "../About";
// import Usage from "../Usage";
// import Dev from "../Dev";
// import NotFound from "../NotFound";
// import Navigation from "../Navigation";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <Router>
//       <nav className="navbar">
//         <div className="menu-toggle" onClick={toggleMenu}>
//           <div className={isOpen ? "dash open" : "dash"}></div>
//           <div className={isOpen ? "dash open" : "dash"}></div>
//           <div className={isOpen ? "dash open" : "dash"}></div>
//         </div>
//         <ul className={isOpen ? "open" : ""}>
//           <li>
//             <a href={Home}>Home</a>
//           </li>
//           <li>
//             <a href={About}>About</a>
//           </li>
//           <li>
//             <a href={Usage}>Usage</a>
//           </li>
//           <li>
//             <a href={Dev}>Contact Dev</a>
//           </li>
//           {/*  <li>
//           <a href={NotFound}></a>
//         </li> */}
//           {/*  <li>
//           <a className="darkMode">Dark Mode</a>
//         </li> */}
//         </ul>
//       </nav>
//     </Router>
//   );
// };

// export default Navbar;
