import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Common/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import JoinUs from "./Pages/JoinUs/JoinUs";
import Contact from "./Pages/Contact/Contact";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/join" element={<JoinUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
