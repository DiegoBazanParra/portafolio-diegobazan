import React from "react";
import Wave2 from "../../Assets/img/waves/footer-wave2.svg";
import Wave3 from "../../Assets/img/waves/footer-wave3.svg";

function Waves() {
  return (
    <div className="footer-background">
      <img
        src={Wave2}
        className="footer-background-wave footerwaves footerwave2"
        alt="footer-wave2"
      />
      <img
        src={Wave3}
        className="footer-background-wave footerwaves"
        alt="footer-wave3"
      />
    </div>
  );
}

export default Waves;
