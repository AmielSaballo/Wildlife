import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Modules/Common/Navbar";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<></>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
