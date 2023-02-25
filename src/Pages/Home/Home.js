import React from "react";
import Footer from "../Common/Footer";
import Counter from "./Components/Counter";
import HomeAbout from "./Components/HomeAbout";
import Parallax from "./Components/Parallax";
import Animals from "./Components/Animals";
import Stats from "./Components/Stats";
import MisVis from "./Components/MisVis";
import HomeServices from "./Components/HomeServices";
import HomeCarousel from "./Components/HomeCarousel";

const Home = () => {
  const animalStats = {
    threatened: 20,
    vulnerable: 15,
    endangered: 10,
    critEndangered: 30,
  };
  return (
    <div>
      <section className="carousel">
        <HomeCarousel />
      </section>
      <section className="about">
        <Counter props={animalStats} />
        <HomeAbout />
      </section>
      <Parallax />
      <section className="animalGrid">
        <Animals />
      </section>
      <section className="stat">
        <Stats />
      </section>
      <section className="join">
        <MisVis />
      </section>
      <section className="services">
        <HomeServices />
      </section>
      <Parallax />
      <section className="blogs"></section>
      <Footer />
    </div>
  );
};

export default Home;
