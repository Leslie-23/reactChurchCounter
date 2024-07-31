import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Header from "./Header";
import Footer from "./Footer";
import App2 from "./App2";

//import Navigation from "./Navigation";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />

    <App2 />
    {/* <App /> */}
    <Footer />
  </React.StrictMode>
);
