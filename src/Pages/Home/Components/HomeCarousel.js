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
      title: "World Wildlife Day 2023",
      text: 'World Wildlife Day 2023 is an international observance that brings attention to the importance of wildlife conservation and the preservation of biodiversity for the well-being of our planet and future generations, with this year\'s theme being "Sustaining all life on Earth".',
      link: "https://www.wildlifeday.org/en",
      sourceText: "Official poster for World Wildlife Day 2023 ",
      sourceLink: "https://www.wildlifeday.org/en",
    },
    {
      image: LeyteSab,
      title: "World Wetlands Day 2023",
      text: 'World Wetlands Day 2023 is a global event that emphasizes the critical role of wetlands in supporting biodiversity, mitigating climate change, and providing essential ecosystem services, with this year\'s theme being "Wetlands for a Sustainable Urban Future".',
      link: "https://www.forestfoundation.ph/news/forest-foundation-philippines-and-tinker-clubs-organize-peak-2023-to-mark-world-wetlands-day-2023/",
      sourceText: "Leyte Sab-a Basin Peatland ",
      sourceLink:
        "https://jacobimages.com/2017/01/mount-hamiguitan-unesco-book-project",
    },
    {
      image: Hamiguitan,
      title:
        "Socio-Cultural Mapping and Documentation of ASEAN Heritage Parks in the Philippines",
      text: "The DENR, in partnership with NCCA and NCIP, is conducting a socio-cultural mapping and documentation project in Philippine ASEAN Heritage Parks to comprehensively document the indigenous knowledge system and practices of Indigenous Peoples/Indigenous Cultural Communities pertaining to resource use and conservation and inform policy-making, with a goal to complete the project in CY 2023.",
      link: "",
      sourceText: " Mount Hamiguitan's Pygmy Forest",
      sourceLink:
        "https://jacobimages.com/2017/01/mount-hamiguitan-unesco-book-project",
    },
    {
      image: Deer,
      title:
        "DENR-BMB cites significant strides in protected area, wildlife conservation",
      text: "The Philippines' Department of Environment and Natural Resources (DENR) has announced progress in areas of protected area management, cave management, and wildlife conservation, with seven more protected areas established under the National Integrated Protected Areas System, 12 species moving to improved conservation status, and 131 protected areas having established and maintained ecotourism facilities and amenities to promote sustainable management. The department has also been working to establish the Verde Island Passage as a protected area and is conducting a Protected Area Suitability Assessment to identify and appraise the status of various ecosystems, flora and fauna located in Mindoro, Batangas, Marinduque, Romblon and Quezon.",
      link: "",
      sourceText: "Mindanao Brown Deer",
      sourceLink: "https://www.joelsartore.com/ani023-00216/",
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
            <div className="carouselText">
              <a href={item.link} target={"new"}>
                <h3>{item.title}</h3>
              </a>
              <p>{item.text}</p>
              <p>
                Source: <a href={item.sourceLink}>{item.sourceText}</a>
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default HomeCarousel;
