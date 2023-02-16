import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Modules/Common/Navbar";
import Home from "./Modules/Home/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
