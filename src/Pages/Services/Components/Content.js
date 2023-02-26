import React from "react";
import "../Styles/Content.scss";
import Header from "../../Common/Header";
import background from "../Images/FlyingFox.jpg";
import { Link } from "react-router-dom";

function Content({ props }) {
  const headerContent = {
    background: background,
    title: "Our Services",
    source: "DENR",
    sourceText: "Flying Fox Monitoring",
    sourceLink:
      "https://r12.denr.gov.ph/index.php/news-events/photo-releases/1457-flying-fox-monitoring",
  };

  const servicesList = props.map((item) => {
    return (
      <div className="service" key={props.indexOf(item)}>
        <table cellSpacing={50}>
          <tbody>
            <tr>
              <td>
                <img src={item.image} alt={item.alt} className="cardImage" />
              </td>
              <td className="details">
                <h1>
                  <Link
                    to={"/services/" + props.indexOf(item)}
                    state={{ item: item }}
                  >
                    {item.title}
                  </Link>
                </h1>
                <p className="text">{item.summary}</p>
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
      <div className="serviceContainer">{servicesList}</div>
    </div>
  );
}

export default Content;
