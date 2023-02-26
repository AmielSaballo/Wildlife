import React from "react";
import "../Styles/Content.scss";
import background from "../Images/Pangolin.jpg";
import Header from "../../Common/Header";
import { Link } from "react-router-dom";

function Content({ props, topBlogs }) {
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
      <div className="blogItem" key={props.indexOf(item)}>
        <img src={item.image} alt={item.alt} />
        <div className="blogSummary">
          <h2>
            <Link to={"/blogs/" + props.indexOf(item)} state={{ item }}>
              {item.title}
            </Link>
          </h2>
          <div className="blogDetails">
            <p>{item.author}</p>
            <p>•</p>
            <p>{item.datePosted}</p>
          </div>
          <p>{item.summary}</p>
        </div>
      </div>
    );
  });

  const topBlogsList = topBlogs.map((item) => {
    return (
      <div className="topBlog" key={topBlogs.indexOf(item)}>
        <div className="topBlogImage">
          <img src={item.image} alt={item.alt} />
        </div>
        <div className="topBlogDetails">
          <h3>
            <Link to={"/blogs/" + props.indexOf(item)}>{item.title}</Link>
          </h3>
          <p>{item.summary}</p>
        </div>
      </div>
    );
  });

  return (
    <div>
      <Header props={headerContent} />
      <div className="blogContainer">
        <div className="listBlogs">
          <h1>Recent Blog Posts</h1>
          {blogsList}
        </div>
        {/* <div className="sidePane">
          <div className="listTopBlogs">
            <h1>Top Blog Posts</h1>
            {topBlogsList}
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Content;
