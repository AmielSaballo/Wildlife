import React from "react";
import { useParams, useLocation } from "react-router-dom";

const HOC =
  (PostComponent) =>
  ({ props }) => {
    const params = useParams();
    // params += 1;
    const loc = useLocation();
    // console.log(props);
    // console.log(params);
    // console.log(loc);

    return <PostComponent {...props} urlParams={params} />;
  };

export default HOC;
