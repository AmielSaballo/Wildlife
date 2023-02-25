import React from "react";
import ServiceCard from "./Card";
import "../Styles/HomeServices.scss";

function HomeServices() {
  //get services
  const services = [
    {
      name: "Lorem",
      caption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cupiditate qui mollitia reprehenderit ipsam dignissimos sit provident quas? " +
        "Reprehenderit neque adipisci ipsa ullam id ducimus eaque ab voluptate officiis placeat!",
      link: "",
    },
    {
      name: "Lorem",
      caption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cupiditate qui mollitia reprehenderit ipsam dignissimos sit provident quas? " +
        "Reprehenderit neque adipisci ipsa ullam id ducimus eaque ab voluptate officiis placeat!",
      link: "",
    },
    {
      name: "Lorem",
      caption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cupiditate qui mollitia reprehenderit ipsam dignissimos sit provident quas? " +
        "Reprehenderit neque adipisci ipsa ullam id ducimus eaque ab voluptate officiis placeat!",
      link: "",
    },
  ];
  return (
    <div>
      <div className="homeServiceContainer">
        <h1>Our Services</h1>
        <section className="cardSection">
          <ServiceCard props={services} />
        </section>
      </div>
    </div>
  );
}

export default HomeServices;
