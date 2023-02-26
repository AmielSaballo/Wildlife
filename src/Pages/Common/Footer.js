import React from "react";
import "../Common/Styles/Footer.scss";
import wwlogo from "../../Logo.png";
import denrlogo from "../../Pages/About/Images/DENR.png";
import bmblogo from "../../Pages/About/Images/BMB.png";
import Terms from "./Terms";
import Privacy from "./Privacy";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footerL">
          <div className="logo">
            <img src={wwlogo} alt="Wildlife Watchers Logo" />
            <img src={denrlogo} alt="DENR Logo" />
            <img src={bmblogo} alt="BMB Logo" />
          </div>
        </div>
        <div className="footerR">
          <p className="siteName">Wildlife PH</p>
          <Privacy />
          <Terms />
        </div>
      </div>
    </div>
  );
}

export default Footer;
