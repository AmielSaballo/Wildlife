import React from "react";
import "../Styles/Content.scss";
import Header from "../../Common/Header";
import AnimalData from "./AnimalData";
import Pawikan from "../Images/Pawikan.jpg";
import Boobook from "../Images/Boobook.jpg";
import CalamianDeer from "../Images/CalamianDeer.jpg";
import CatSnake from "../Images/CatSnek.jpg";
import Colasisi from "../Images/Colasisi.jpg";
import Dugong from "../Images/Dugong.jpg";
import FlyingFox from "../Images/FlyingFox.jpg";
import BleedingHeartDove from "../Images/LuzonBleedingHeartDove.png";
import Binturong from "../Images/Mood.jpg";
import Pangolin from "../Images/Pangolin.jpg";
import PhilDuck from "../Images/PhilDuck.jpg";
import PhilHawkEagle from "../Images/PhilHawkEagle.jpg";
import Tamaraw from "../Images/Tamaraw.jpg";
import Tarsier from "../Images/Tarsier.jpg";
import PalawanTit from "../Images/Tit.jpg";
import WartyPig from "../Images/WartyPig.png";
import * as action from "../Utils/Action";
import { useDispatch } from "react-redux";

function Content() {
  const dispatch = useDispatch();
  const headerContent = {
    background: Pawikan,
    title: "Animals",
    source: "chze17",
    sourceText: "Pawikan",
    sourceLink:
      "https://www.flickr.com/photos/25005769@N07/2629957939/in/photostream/",
    position: "10% 65%",
  };

  const category = [
    "OtherThreatenedSpecies",
    "Vulnerable",
    "Endangered",
    "CriticallyEndangered",
  ];

  const categoryDescText = {
    OtherThreatenedSpecies:
      'The "other threatened" category refers to species that are considered to be at risk of becoming endangered in the near future, but are not currently classified as endangered or vulnerable.',
    Vulnerable:
      "The vulnerable species category is a conservation status assigned to species that are likely to become endangered unless the circumstances threatening their survival and reproduction improve. These species have a decreasing population trend and face significant threats such as habitat loss, hunting, and climate change.",
    Endangered:
      "The endangered species category refers to species that are at very high risk of becoming extinct in the near future. These species have experienced a significant decline in their population size and range, and are facing threats such as habitat loss, hunting, and disease.",
    CriticallyEndangered:
      "The critically endangered species category is the highest risk category, meaning species that face an extremely high risk of extinction in the wild. These species have experienced a significant decline in population, with their remaining population size being small and limited to a specific geographic area.",
  };

  const animalPicList = {
    OtherThreatenedSpecies: {
      image1: Tarsier,
      image2: CatSnake,
      image3: Binturong,
      image4: PalawanTit,
      desc1: "Philippine Tarsier",
      desc2: "Philippine Cat Snake",
      desc3: "Binturong",
      desc4: "Palawan Tit",
      source1:
        "https://philippinemorningpost.com/philippine-tarsier-facing-extinction/",
      source2: "https://www.joelsartore.com/ani102-00336/",
      source3: "https://www.flickr.com/photos/ucumari/4645332958",
      source4: "https://ebird.org/species/paltit2",
    },
    Vulnerable: {
      image1: BleedingHeartDove,
      image2: PhilDuck,
      image3: PhilHawkEagle,
      image4: Boobook,
      desc1: "Luzon Bleeding Heart Dove",
      desc2: "Philippine Duck",
      desc3: "Philippine Hawk-Eagle",
      desc4: "Chocolate Boobook",
      source1:
        "https://stlzoo.org/animals/birds/pigeons-doves/luzon-bleeding-heart-dove",
      source2: "https://macaulaylibrary.org/asset/275990881",
      source3:
        "https://r5.denr.gov.ph/index.php/news-events/press-releases?start=150",
      source4: "https://macaulaylibrary.org/asset/82233891",
    },
    Endangered: {
      image1: CalamianDeer,
      image2: Pawikan,
      image3: Pangolin,
      image4: FlyingFox,
      desc1: "Calamian Deer",
      desc2: "Green Turtle (Pawikan)",
      desc3: "Palawan Pangolin",
      desc4: "Giant Flying Fox",
      source1: "https://www.joelsartore.com/ani023-00165/",
      source2: "https://tl.wikipedia.org/wiki/Pawikan",
      source3: "https://en.wikipedia.org/wiki/Philippine_pangolin",
      source4: "https://www.flickr.com/photos/littleredelf/215375990/",
    },
    CriticallyEndangered: {
      image1: Colasisi,
      image2: Tamaraw,
      image3: Dugong,
      image4: WartyPig,
      desc1: "Colasisi",
      desc2: "Tamaraw",
      desc3: "Dugong",
      desc4: "Visayan Warty Pig",
      source1:
        "https://www.wildbirdphotographersofthephilippinesglossary.com/gallery/wppaspec/oc2/cv0/abParrot-Philippine-Hanging-AKA-Colasisi",
      source2:
        "https://mb.com.ph/2022/10/13/ph-celebrates-national-tamaraw-month-endangered-species-now-only-about-600/",
      source3: "https://www.dmitrykokh.com/dugong",
      source4:
        "https://www.nationalgeographic.com/animals/article/endangered-warty-pigs-mohawks-philippines",
    },
  };

  const filterAnimals = (isActive, category) => {
    dispatch(action.getAnimals(isActive, category));
  };

  const handleClick = (e) => {
    let chosen = document.getElementById(e.target.id);
    // filterAnimals(chosen.id);
    filterAnimals(
      !document.getElementById(chosen.id).classList.contains("activeAnimal"),
      chosen.id
    );
    for (let i = 0; i < category.length; ++i) {
      let item = category[i];
      if (
        chosen.id == item &&
        !document.getElementById(item).classList.contains("activeAnimal")
      ) {
        document.getElementById(item).classList.add("activeAnimal");
        document.getElementById("categoryDesc").innerHTML =
          categoryDescText[chosen.id];
        document.getElementById("animalPic1").src =
          animalPicList[chosen.id].image1;
        document.getElementById("animalPic2").src =
          animalPicList[chosen.id].image2;
        document.getElementById("animalPic3").src =
          animalPicList[chosen.id].image3;
        document.getElementById("animalPic4").src =
          animalPicList[chosen.id].image4;
        document.getElementById("animalPicDesc1").innerHTML =
          animalPicList[chosen.id].desc1;
        document.getElementById("animalPicDesc2").innerHTML =
          animalPicList[chosen.id].desc2;
        document.getElementById("animalPicDesc3").innerHTML =
          animalPicList[chosen.id].desc3;
        document.getElementById("animalPicDesc4").innerHTML =
          animalPicList[chosen.id].desc4;
        document.getElementById("animalSource1").href =
          animalPicList[chosen.id].source1;
        document.getElementById("animalSource2").href =
          animalPicList[chosen.id].source2;
        document.getElementById("animalSource3").href =
          animalPicList[chosen.id].source3;
        document.getElementById("animalSource4").href =
          animalPicList[chosen.id].source4;
      } else {
        document.getElementById(item).classList.remove("activeAnimal");
      }
    }
    if (document.getElementsByClassName("activeAnimal").length == 0) {
      document.getElementById("categoryDesc").innerHTML = "";
      document.getElementById("animalPic1").src =
        animalPicList["OtherThreatenedSpecies"].image1;
      document.getElementById("animalPic2").src =
        animalPicList["Vulnerable"].image1;
      document.getElementById("animalPic3").src =
        animalPicList["Endangered"].image1;
      document.getElementById("animalPic4").src =
        animalPicList["CriticallyEndangered"].image1;
      document.getElementById("animalPicDesc1").innerHTML =
        animalPicList["OtherThreatenedSpecies"].desc1;
      document.getElementById("animalPicDesc2").innerHTML =
        animalPicList["Vulnerable"].desc1;
      document.getElementById("animalPicDesc3").innerHTML =
        animalPicList["Endangered"].desc1;
      document.getElementById("animalPicDesc4").innerHTML =
        animalPicList["CriticallyEndangered"].desc1;
      document.getElementById("animalSource1").href =
        animalPicList["OtherThreatenedSpecies"].source1;
      document.getElementById("animalSource2").href =
        animalPicList["Vulnerable"].source1;
      document.getElementById("animalSource3").href =
        animalPicList["Endangered"].source1;
      document.getElementById("animalSource4").href =
        animalPicList["CriticallyEndangered"].source1;
    }
  };

  return (
    <div>
      <Header props={headerContent} />
      <div className="animalsContainer">
        <table style={{ margin: "0 auto" }}>
          <tbody>
            <tr>
              <td>
                <div
                  className="animalCategory"
                  id="OtherThreatenedSpecies"
                  onClick={handleClick}
                >
                  Other Threatened Species
                </div>
              </td>
              <td>
                <div
                  className="animalCategory"
                  id="Vulnerable"
                  onClick={handleClick}
                >
                  Vulnerable Species
                </div>
              </td>
              <td>
                <div
                  className="animalCategory"
                  id="Endangered"
                  onClick={handleClick}
                >
                  Endangered Species
                </div>
              </td>
              <td>
                <div
                  className="animalCategory"
                  id="CriticallyEndangered"
                  onClick={handleClick}
                >
                  Critically Endangered Species
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="categorySummary">
          <p id="categoryDesc"></p>
        </div>
        <hr
          style={{
            backgroundColor: "lightgray",
            borderColor: "lightgray",
            height: "1px",
            width: "60%",
            margin: "auto",
          }}
        />
        <div className="animalDataContainer">
          <AnimalData />
          <div className="animalPictures">
            <img src={Tarsier} id="animalPic1" className="animalImg" />
            <a
              target={"new"}
              id="animalSource1"
              href="https://philippinemorningpost.com/philippine-tarsier-facing-extinction/"
            >
              <p id="animalPicDesc1">Philippine Tarsier</p>
            </a>
            <img
              src={BleedingHeartDove}
              id="animalPic2"
              className="animalImg"
            />
            <a
              target={"new"}
              id="animalSource2"
              href="https://stlzoo.org/animals/birds/pigeons-doves/luzon-bleeding-heart-dove"
            >
              <p id="animalPicDesc2">Luzon Bleeding Heart Dove</p>
            </a>
            <img src={CalamianDeer} id="animalPic3" className="animalImg" />
            <a
              target={"new"}
              id="animalSource3"
              href="https://www.joelsartore.com/ani023-00165/"
            >
              <p id="animalPicDesc3">Calamian Deer</p>
            </a>
            <img src={Colasisi} id="animalPic4" className="animalImg" />
            <a
              target={"new"}
              id="animalSource4"
              href="https://www.wildbirdphotographersofthephilippinesglossary.com/gallery/wppaspec/oc2/cv0/abParrot-Philippine-Hanging-AKA-Colasisi"
            >
              <p id="animalPicDesc4">Colasisi</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
