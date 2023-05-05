import React from "react";
import { Link } from "react-router-dom";
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
    threatened: 101,
    vulnerable: 119,
    endangered: 55,
    critEndangered: 47,
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
      <div className="homePrograms">
        <Link to={"/programs"}>
          <Parallax text="Check out our programs" span="arrow_circle_right" />
        </Link>
      </div>
      <section className="join">
        <MisVis />
      </section>
      <div className="homeBlogs">
        <Link to={"/blogs"}>
          <Parallax text="Check out our blogs" span="arrow_circle_right" />
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
