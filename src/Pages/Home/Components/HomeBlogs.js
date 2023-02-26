import React from "react";
import BlogCard from "./BlogCard";
import "../Styles/HomeBlogs.scss";

function HomeBlogs() {
  const blogs = [
    {
      name: "Lorem",
      caption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cupiditate qui mollitia reprehenderit ipsam dignissimos sit provident quas? " +
        "Reprehenderit neque adipisci ipsa ullam id ducimus eaque ab voluptate officiis placeat!",
      link: "",
    },
    {
      name: "Lorem",
      caption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cupiditate qui mollitia reprehenderit ipsam dignissimos sit provident quas? " +
        "Reprehenderit neque adipisci ipsa ullam id ducimus eaque ab voluptate officiis placeat!",
      link: "",
    },
    {
      name: "Lorem",
      caption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cupiditate qui mollitia reprehenderit ipsam dignissimos sit provident quas? " +
        "Reprehenderit neque adipisci ipsa ullam id ducimus eaque ab voluptate officiis placeat!",
      link: "",
    },
  ];
  return (
    <div>
      <div className="blogsContainer">
        <h1 className="blogTitle">Our Blogs</h1>
        <div className="blogCardSection">
          <BlogCard props={blogs} />
        </div>
      </div>
    </div>
  );
}

export default HomeBlogs;
