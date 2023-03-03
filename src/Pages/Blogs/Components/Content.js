import React from "react";
import "../Styles/Content.scss";
import background from "../Images/Pangolin.jpg";
import Header from "../../Common/Header";
import { Link } from "react-router-dom";
import Loading from "../../Common/Loading";

function Content({ props }) {
  const headerContent = {
    background: background,
    title: "Blogs",
    source: "Gregg Yan",
    sourceText: "Palawan Pangolin",
    sourceLink:
      "https://newsinfo.inquirer.net/1149759/the-secret-life-of-pangolins",
    position: "10% 39%",
  };

  const blogsList = props.map((item) => {
    return (
      <div>
        {props.length < 1 ? (
          <Loading />
        ) : (
          <div className="blogItem" key={item.id}>
            {item.blogImage != null ? (
              <img
                src={require(`../Images/${item.blogImage}`)}
                className="cardImage"
              />
            ) : (
              <p>a</p>
            )}
            <div className="blogSummary">
              <h2>
                <Link to={"/blogs/" + item.blogTitle} state={{ item }}>
                  {item.blogTitle}
                </Link>
              </h2>
              <div className="blogDetails">
                <p>{item.blogAuthor}</p>
                <p>•</p>
                <p>{item.postedDate}</p>
              </div>
              <p>{item.blogSummary}</p>
            </div>
          </div>
        )}
      </div>
    );
  });

  return (
    <div>
      <Header props={headerContent} />
      <div className="blogContainer">
        <div className="listBlogs">{blogsList}</div>
      </div>
    </div>
  );
}

export default Content;
