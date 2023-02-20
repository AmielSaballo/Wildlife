import React from "react";
import Footer from "../Common/Footer";
import Counter from "./Components/Counter";
import HomeAbout from "./Components/HomeAbout";
import Parallax from "./Components/Parallax";
import Animals from "./Components/Animals";
import Stats from "./Components/Stats";
import MisVis from "./Components/MisVis";
import HomeServices from "./Components/HomeServices";

const Home = () => {
  return (
    <div>
      <section className="carousel">[insert blog carousel here]</section>
      <section className="about">
        <Counter policies={20} programs={15} services={10} people={30} />
        <HomeAbout />
      </section>
      <Parallax />
      <section className="animals">
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
      <section className="blogs"></section>
      <Footer />
    </div>
  );
};

export default Home;
