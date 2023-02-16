import React from "react";
import Footer from "../Common/Footer";
import Counter from "./Components/Counter";

const Home = () => {
  return (
    <div>
      <section className="carousel">[insert blog carousel here]</section>
      <section className="about">
        <Counter policies={20} programs={15} services={10} people={30} />
      </section>
      <section className="animals"></section>
      <section className="stat">aaaaaaaaaa</section>
      <section className="join"></section>
      <section className="services"></section>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
