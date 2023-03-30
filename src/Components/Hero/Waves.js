import React from "react";
import Wave2 from "../../Assets/forms/wave2.svg";
import Wave3 from "../../Assets/forms/wave3.svg";

function Waves() {
  return (
    <div className="waveback">
      <div className="wavebackground"></div>
      <img src={Wave2} className="wave2" alt="Hero-Wave2" />
      <img src={Wave3} className="wave3" alt="Hero-Wave3" />
    </div>
  );
}

export default Waves;
