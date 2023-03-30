import React from "react";
import LogoReact from "../../Assets/icons/logo-react.svg";
import Logo from "../../Assets/icons/logo-rick.svg";

function Footer() {
  return (
    <p className="footer-description">
      Hecho con
      <img src={LogoReact} alt="react logo" />
      por Diego Bazan
      <img src={Logo} alt="personal logo" />
      2022
    </p>
  );
}

export default Footer;
