import { React, useEffect } from "react";
import Footer from "../Common/Footer";
import Content from "./Components/Content";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "./Utils/Action";
import Loading from "../Common/Loading";

function Blogs() {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogsList.blogs);

  useEffect(() => {
    dispatch(getBlogs());
  });

  return (
    <>
      {blogs.length < 1 ? (
        <Loading />
      ) : (
        <div>
          {" "}
          <Content props={blogs} />
          <Footer />
        </div>
      )}
      <Footer />
    </>
  );
}

export default Blogs;
