import { React, useEffect } from "react";
import Content from "./Components/Content";
import Footer from "../Common/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getPrograms } from "./Utils/Action";

function Services() {
  const dispatch = useDispatch();
  const programs = useSelector((state) => state.programsList.programs);

  useEffect(() => {
    dispatch(getPrograms());
  });

  return (
    <div>
      <Content props={programs} />
      <Footer />
    </div>
  );
}

export default Services;
