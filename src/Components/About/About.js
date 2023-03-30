import React from "react";
import Bubles from "./Bubles";
import Content from "./Content";
import "../../Styles/About.css";

function contact() {
  return (
    <div className="about" id="about">
      <div className="about-section">
        <div className="about-section-container">
          <h2 className="about-title">Sobre mí</h2>
          <Bubles />
          <div className="about-wrapper">
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
}

export default contact;
