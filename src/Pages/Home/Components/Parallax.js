import React from "react";
import "../Styles/Parallax.scss";

function Parallax(props) {
  return (
    <div>
      <div className="parallaxContainer">
        <div className="overlay">
          <p>{props.text}</p>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Parallax;
