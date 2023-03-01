import React from "react";
import "../Styles/Content.scss";
import Header from "../../Common/Header";
import DENR from "../Images/DENR.png";
import BMB from "../Images/BMB.png";
import background from "../Images/TreeHugging.jpg";
import { Link } from "react-router-dom";

function Content() {
  const headerContent = {
    background: background,
    title: "About Us",
    source: "DENR",
    sourceText: "Tree Hugging Campaign",
    sourceLink:
      "https://r5.denr.gov.ph/index.php/news-events/regional-releases/1610-denr-bicol-joins-tree-hugging-campaign?tmpl=component&print=1&layout=default",
  };

  return (
    <div>
      <Header props={headerContent} />
      <div className="aboutContainer">
        <div className="denr">
          <img src={DENR} alt="DENR Logo" />
          <div className="denrText">
            <h1>Department of Environment and Natural Resources (DENR)</h1>
            <p>
              <span className="topic">Mission: </span> To mobilize our citizenry
              in protecting, conserving, and managing the environment and
              natural resources for the present and future generations.
            </p>
            <p>
              <span className="topic">Vision: </span> A nation enjoying and
              sustaining its natural resources and clean and healthy
              environment.
            </p>
            <p>
              <span className="topic">Major Functions: </span>DENR is tasked to
              formulate and implement policies, guidelines, rules and
              regulations relating to environmental management and pollution
              prevention and control. They formulate, implement, and supervise
              the government's policies, plans and programs pertaining to the
              management, conservation, development, use and replenishment of
              the country's natural resources and ecological diversity. DENR
              promulgates and implements rules and regulations governing the
              exploration, development, extraction, disposition, and use of the
              forests, lands, minerals, wildlife, and other natural resources.
            </p>
          </div>
        </div>
        <div className="bmb">
          <div className="bmbText">
            <h1>Biodiversity Management Bureau (BMB)</h1>
            <p>
              <span className="topic">Mission: </span> To conserve and
              sustainably manage the country's biodiversity.
            </p>
            <p>
              <span className="topic">Vision: </span> Philippine Biodiversity
              that provides natural resiliency and sustained benefits for all.
            </p>
            <p>
              <span className="topic">Major Functions: </span>BMB formulates and
              recommends policies, guidelines, rules and regulations for the
              establishment and management of an Integrated Protected Areas
              System such as national parks, wildlife sanctuaries and refuge,
              marine parks and biospheric reserves. They formulate an up-to-date
              listing of endangered Philippine flora and fauna and recommend a
              program of conservation and propagation of the same. Alongside
              this, they also formulate and recommend policies, guidelines and
              rules for the conservation of the three (3) components of
              biological diversity: genetic resources, ecosystems and endangered
              species of Philippine flora and fauna. This bureau assists the
              Secretary in the monitoring and assessment of the management of
              the Integrated Protected Areas System and provide technical
              assistance to the Regional offices in the implementation of
              programs for these areas.
            </p>
          </div>
          <img src={BMB} alt="BMB Logo" />
        </div>
      </div>
      <div className="aboutBtn">
        <Link to={"/programs"}>
          <button>Programs</button>
        </Link>
      </div>
    </div>
  );
}

export default Content;
