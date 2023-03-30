import React from "react";
// Icons FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Redes() {
  return (
    <div className="social-links">
      <a
        href="https://www.linkedin.com/in/diego-bazan-parra-2b916a206/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} color="#000" size="2x" />
      </a>
      <a
        href="https://github.com/DiegoBazanParra"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} color="#000" size="2x" />
      </a>
    </div>
  );
}

export default Redes;
