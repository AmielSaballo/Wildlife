import React from "react";
import Carousel from "react-material-ui-carousel";
import "../Styles/HomeCarousel.scss";
import WorldWildlifeDay from "../images/wwd2023.jpg";
import LeyteSab from "../images/Leyte Sab-a.jpg";
import Hamiguitan from "../images/Hamiguitan.jpg";
import Deer from "../images/PhilDeer.jpg";

function HomeCarousel() {
  const items = [
    {
      image: WorldWildlifeDay,
      text: "AAAAAAAAAAAAAAAAAAAAAAAA",
    },
    {
      image: LeyteSab,
      text: "BBBBBBBBBBBBBBBBBBBBBBBB",
    },
    {
      image: Hamiguitan,
      text: "CCCCCCCCCCCCCCCCCCCCCCCCC",
    },
    {
      image: Deer,
      text: "DDDDDDDDDDDDDDDDDDDDDDD",
    },
  ];

  return (
    <div className="topCarousel">
      <Carousel
        navButtonsAlwaysVisible={true}
        indicators={false}
        fullHeightHover={true}
        swipe={true}
        animation={"slide"}
        duration={800}
      >
        {items.map((item) => (
          <div
            key={items.indexOf(item)}
            className="carouselItems"
            style={{ backgroundImage: "url(" + item.image + ")" }}
          >
            <p className="carouselText">{item.text}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default HomeCarousel;
