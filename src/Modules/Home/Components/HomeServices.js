import React from "react";
import ServiceCard from "./Card";
import "../Styles/HomeServices.scss";

function HomeServices() {
  return (
    <div>
      <div className="homeServiceContainer">
        <h1>Our Services</h1>
        <div className="servicesCards">
          <ServiceCard />
        </div>
      </div>
    </div>
  );
}

export default HomeServices;
