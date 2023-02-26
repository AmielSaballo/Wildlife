import React from "react";
import { useParams, useLocation } from "react-router-dom";

const HOC =
  (PostComponent) =>
  ({ props }) => {
    const params = useParams();
    const loc = useLocation();
    // console.log(props);
    // console.log(params);
    // console.log(loc);

    return (
      <PostComponent {...props} urlParams={params} props={loc.state.item} />
    );
  };

export default HOC;
