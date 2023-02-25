import React from "react";
import Carousel from "react-material-ui-carousel";
import "../Styles/HomeCarousel.scss";

function Item(props) {
  return (
    <div>
      <img src={props.item.image} alt={props.item.text} />
    </div>
  );
}

function HomeCarousel() {
  const items = [
    {
      image:
        "https://images.pexels.com/photos/927497/pexels-photo-927497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "a",
    },
    {
      image:
        "https://images.pexels.com/photos/1068554/pexels-photo-1068554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "b",
    },
    {
      image:
        "https://images.pexels.com/photos/2265247/pexels-photo-2265247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "c",
    },
    {
      image:
        "https://images.pexels.com/photos/1123771/pexels-photo-1123771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "d",
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
          <Item item={item} key={items.indexOf(item)} />
        ))}
      </Carousel>
    </div>
  );
}

export default HomeCarousel;
