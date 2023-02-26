import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Common/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import JoinUs from "./Pages/JoinUs/JoinUs";
import Contact from "./Pages/Contact/Contact";
import Services from "./Pages/Services/Services";
import ServicePost from "./Pages/Services/ServicePost";
import Blogs from "./Pages/Blogs/Blogs";
import BlogPost from "./Pages/Blogs/BlogPost";
import Animals from "./Pages/Animals/Animals";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:service_id" element={<ServicePost />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:blog_id" element={<BlogPost />} />
        <Route path="/join" element={<JoinUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/animals" element={<Animals />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
