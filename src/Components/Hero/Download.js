import React from "react";
import Billing from "../../Assets/img/billing.svg";
import IconRing from "../../Assets/img/icon-ring.svg";

function Download() {
  return (
    <a
      href="https://drive.google.com/uc?export=download&id=1FQOcE-AZge4vV5OJ1nAH7HkrWm_AU4HP"
      className="Download"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="hero-btn-download">
        <div className="icon-download">
          <img src={Billing} className="download-icon" alt="Hero-Billing" />
          <img src={IconRing} className="download-ring" alt="Hero-Ring" />
        </div>
        <div className="download-text">
          <p>Currículum (CV)</p>
          <span>Descargar</span>
        </div>
      </div>
    </a>
  );
}

export default Download;
