 

import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
        <br /><br />
      <div className="footer-content">
        <div className="footer-logo">Let's Grow More</div>
        <div className="footer-links">
          {/* <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a> */}
        </div>
      </div>
      <p className="footer-copy">&#169; {new Date().getFullYear()} Your Brand Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
