import { React, useEffect, useState } from "react";
import HOC from "../Common/HOC";
import Header from "../Common/Header";
import background from "./Images/PhilHawk.jpg";
import "./Styles/ProgramPost.scss";
import Footer from "../Common/Footer";
import axios from "axios";
import parse from "html-react-parser";
import { ProgramsAPI } from "../../Utils/services";

function ProgramPost({ urlParams }) {
  // console.log(`https://localhost:7153/api/Programs/${urlParams.program_id}`);
  // console.log(urlParams.program_id);

  const [post, SetPost] = useState([]);
  const [init, SetInit] = useState(false);

  useEffect(() => {
    axios.get(ProgramsAPI).then((res) => {
      if (!init) {
        res.data.map((item) => {
          if (item.programName === urlParams.program_id) {
            SetPost(item);
          }
        });
        SetInit(true);
      }

      // console.log(post);
    });
  });

  const headerContent = {
    background: background,
    title: "Programs",
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
          {post.image != null ? (
            <img
              src={require(`./Images/${post.image}`)}
              className="cardImage"
            />
          ) : (
            ""
          )}
          <div className="info">
            <p className="infotxt">
              <span className="material-icons"> place </span> {post.location}
            </p>
            <p className="infotxt">
              <span className="material-icons"> phone </span> {post.phoneNumber}
            </p>
            <p className="infotxt">
              <span className="material-icons"> email </span> {post.email}
            </p>
            <p className="infotxt">
              <span className="material-icons"> language </span>
              <a
                href="https://www.bmb.gov.ph/index.php/major-programs-paoemd/padm"
                target={"new"}
              >
                Source
              </a>
            </p>
          </div>
        </div>
        <div className="content">
          <h1>{post.programName}</h1>
          <p>{parse(`${post.programDescription}`)}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HOC(ProgramPost);
