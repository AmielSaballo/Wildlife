import { React, useState, useEffect } from "react";
import HOC from "../Common/HOC";
import Header from "../Common/Header";
import background from "./Images/Tamaraw3.jpg";
import "./Styles/BlogPost.scss";
import Footer from "../Common/Footer";
import axios from "axios";
import parse from "html-react-parser";
import { BlogsAPI } from "../../Assets/services";

function BlogPost({ urlParams }) {
  const [post, SetPost] = useState([]);
  const [init, SetInit] = useState(false);

  useEffect(() => {
    axios.get(BlogsAPI).then((res) => {
      if (!init) {
        res.data.map((item) => {
          if (item.blogTitle === urlParams.blog_id) {
            SetPost(item);
          }
        });
        SetInit(true);
      }
    });
  });

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
          {post.blogImage != null ? (
            <img
              src={require(`./Images/${post.blogImage}`)}
              className="cardImage"
            />
          ) : (
            ""
          )}
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
          <h1>{post.blogTitle}</h1>
          <div className="blogPostDetails">
            <p>{post.blogAuthor}</p>
            <p>•</p>
            <p>{post.postedDate}</p>
          </div>
          <div className="blogPostText">
            <p>{parse(`${post.blogContent}`)}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HOC(BlogPost);
