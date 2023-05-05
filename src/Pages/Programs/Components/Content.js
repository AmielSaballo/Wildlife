import React from "react";
import "../Styles/Content.scss";
import Header from "../../Common/Header";
import background from "../Images/FlyingFox.jpg";
import { Link } from "react-router-dom";

function Content({ props }) {
  const headerContent = {
    background: background,
    title: "Our Programs",
    source: "DENR",
    sourceText: "Flying Fox Monitoring",
    sourceLink:
      "https://r12.denr.gov.ph/index.php/news-events/photo-releases/1457-flying-fox-monitoring",
  };

  const programList = props.map((item) => {
    return (
      <div className="service" key={item.id}>
        <table cellSpacing={50}>
          <tbody>
            <tr>
              <td>
                {item.image != null ? (
                  <img
                    src={require(`../Images/${item.image}`)}
                    className="cardImage"
                  />
                ) : (
                  ""
                )}
              </td>
              <td className="details">
                <h1>
                  <Link to={"/programs/" + item.programName}>
                    {item.programName}
                  </Link>
                </h1>
                <p className="text">{item.programSummary}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  });
  return (
    <div>
      <Header props={headerContent} />
      <div className="serviceContainer">{programList}</div>
    </div>
  );
}

export default Content;
