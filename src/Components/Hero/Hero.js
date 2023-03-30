// Styles CSS
import "../../Styles/Hero/global.css";
// Components
import Waves from "./Waves";
import Information from "./Information";
import Download from "./Download";
import Redes from "./Redes";
import Mockups from "./Mockups";

function Hero() {
  return (
    <div className="wrapper">
      <div className="container">
        {/* Waves */}
        <Waves />
        <div className="section-autor">
          <div className="card card-hero animation">
            {/* Information */}
            <Information />
            {/* Download CV */}
            <Download />
            {/* Redes Sociales */}
            <Redes />
          </div>
          {/* Mockups */}
          <Mockups />
        </div>
      </div>
    </div>
  );
}

export default Hero;
