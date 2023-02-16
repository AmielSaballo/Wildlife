import React from "react";
import "../Common/Styles/Footer.css";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footerL">
          <div className="logo"></div>
        </div>
        <div className="footerR">
          <p className="siteName">Wildlife PH</p>
          <p className="terms">TERMS AND CONDITIONS</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
