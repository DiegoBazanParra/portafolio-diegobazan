import React from "react";
import Wave1 from "../../Assets/img/certificate-wave1.svg";
import Wave2 from "../../Assets/img/certificate-wave2.svg";
import Wave3 from "../../Assets/img/certificate-wave3.svg";

function Waves() {
  return (
    <div className="project-background">
      <img src={Wave1} className="project-wave1 certificate-wave" alt="Wave1" />
      <img src={Wave2} className="project-wave2 certificate-wave" alt="Wave2" />
      <img src={Wave3} className="project-wave3 certificate-wave" alt="Wave3" />
    </div>
  );
}

export default Waves;
