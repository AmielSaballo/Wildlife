import React from "react";
import HOC from "../Common/HOC";
import Header from "../Common/Header";
import background from "./Images/Tamaraw3.jpg";
import "./Styles/BlogPost.scss";
import Footer from "../Common/Footer";

function BlogPost({ urlParams, props }) {
  const headerContent = {
    background: background,
    title: "Blogs",
    source: "Emmanuel Schutz",
    sourceText: "Tamaraw",
    sourceLink: "https://speciesonthebrink.org/species/tamaraw/",
    position: "10% 70%",
  };
  return (
    <div>
      <Header props={headerContent} />
      <div className="blogPostContainer">
        <div className="blogPostImage">
          <img src={props.image} alt={props.alt} />
        </div>
        <hr
          style={{
            backgroundColor: "black",
            borderColor: "black",
            height: "1px",
            width: "90vw",
            margin: "2rem auto",
          }}
        />
        <div className="blogPostContent">
          <h1>{props.title}</h1>
          <div className="blogPostDetails">
            <p>{props.author}</p>
            <p>•</p>
            <p>{props.datePosted}</p>
          </div>
          <div className="blogPostText">
            <p>{props.content}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HOC(BlogPost);
