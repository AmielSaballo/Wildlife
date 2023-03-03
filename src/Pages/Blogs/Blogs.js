import { React, useEffect } from "react";
import Footer from "../Common/Footer";
import Content from "./Components/Content";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "./Utils/Action";

function Blogs() {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogsList.blogs);

  useEffect(() => {
    dispatch(getBlogs());
  });

  return (
    <div>
      <Content props={blogs} />
      <Footer />
    </div>
  );
}

export default Blogs;
