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
import HomeBlogs from "./Components/HomeBlogs";

const Home = () => {
  const animalStats = {
    threatened: 20,
    vulnerable: 15,
    endangered: 10,
    critEndangered: 30,
  };

  const areaStats = {
    protected: 248,
    landArea: "30M",
    terrestrial: "4.65M",
    marine: "220M",
    protectedMarine: "3.1M",
    protectedArea: "7.79M",
  };

  const motto = "Advocate. Donate. Protect the Wild.";

  return (
    <div>
      <section className="carousel">
        <HomeCarousel />
      </section>
      <section className="about">
        <Parallax text={motto} />
        <HomeAbout />
      </section>
      <Counter props={animalStats} />

      <section className="animalGrid">
        <Animals />
      </section>
      <section className="stat">
        <Stats props={areaStats} />
      </section>
      <section className="join">
        <MisVis />
      </section>
      <section className="services">
        <HomeServices />
      </section>
      <a href="/services">
        <Parallax text="Check out our services" />
      </a>
      <section className="blogs">
        <HomeBlogs />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
