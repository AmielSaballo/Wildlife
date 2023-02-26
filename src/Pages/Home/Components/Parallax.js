import React from "react";
import "../Styles/Parallax.scss";

function Parallax(props) {
  return (
    <div>
      <div className="parallaxContainer">
        <div className="overlay">
          <h3>
            {props.text} <span className="material-icons">{props.span}</span>
          </h3>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Parallax;
