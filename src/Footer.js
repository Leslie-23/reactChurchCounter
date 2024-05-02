import React from "react";
import "./Footer.css";

const Footer = () => {
  const date = new Date().getFullYear();
  const name = "PAL Technologies";
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          {" "}
          {date} &copy; {name}
        </p>
        <p>All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
