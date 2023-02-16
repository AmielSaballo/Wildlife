import React from "react";
import Footer from "../Common/Footer";
import Counter from "./Components/Counter";
import HomeAbout from "./Components/HomeAbout";
import Parallax from "./Components/Parallax";

const Home = () => {
  return (
    <div>
      <section className="carousel">[insert blog carousel here]</section>
      <section className="about">
        <Counter policies={20} programs={15} services={10} people={30} />
        <HomeAbout />
      </section>
      <section className="animals">
        <Parallax />
      </section>
      <section className="stat">aaaaaaaaaa</section>
      <section className="join"></section>
      <section className="services"></section>
      <Footer />
    </div>
  );
};

export default Home;
