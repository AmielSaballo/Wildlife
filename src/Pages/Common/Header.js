import React from "react";
import "./Styles/Header.scss";

function Header({ props }) {
  return (
    <div>
      <div
        className="headerContainer"
        style={{
          backgroundImage: "url(" + props.background + ")",
          backgroundPosition: props.position,
        }}
      >
        <p>Advocate. Donate. Protect the Wild.</p>
        <h1>{props.title}</h1>
        <hr
          style={{
            backgroundColor: "white",
            borderColor: "white",
            height: "1px",
            width: "25%",
            margin: "1.5rem auto 0",
          }}
        />
        <div className="sourceText">
          <p>{props.sourceText}</p>
          <p>
            Source:
            <a href={props.sourceLink}> {props.source}</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
