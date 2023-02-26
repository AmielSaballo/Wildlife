import React from "react";
import HOC from "./Components/HOC";
import Header from "../Common/Header";
import background from "./Images/PhilHawk.jpg";
import "./Styles/ServicePost.scss";
import Footer from "../Common/Footer";

function ServicePost({ urlParams, props }) {
  //   {urlParams.service_id}

  const headerContent = {
    background: background,
    title: "Wildlife Watchers PH - Servicess",
    source: "DENR",
    sourceText: "Philippine Hawk-Eagle",
    sourceLink:
      "https://r5.denr.gov.ph/index.php/news-events/press-releases/1383-philippine-hawk-eagle-rescued-and-released-in-catanduanes?tmpl=component&print=1&layout=default",
  };

  return (
    <div>
      <Header props={headerContent} />
      <div className="postContainer">
        <div className="imageContainer">
          <img src={props.image} alt={props.alt} />
          <div className="info">
            <p className="infotxt">
              <span className="material-icons"> place </span> Location, location
            </p>
            <p className="infotxt">
              <span className="material-icons"> phone </span> 1234567890
            </p>
            <p className="infotxt">
              <span className="material-icons"> email </span> example@email.com
            </p>
            <p className="infotxt">
              <span className="material-icons"> language </span>
              <a href="https://www.bmb.gov.ph/index.php/major-programs-paoemd/padm">
                Protected Area Development and Management
              </a>
            </p>
          </div>
        </div>
        <div className="content">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HOC(ServicePost);
