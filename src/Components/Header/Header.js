import React from "react";
import "../../Styles/Header.css";
// Img Svg
import Logo from "../../Assets/icons/logo-rick.svg";
// Icons Svg
import Menu from "../../Assets/icons/hamburger.svg";
import About from "../../Assets/icons/profile.svg";
import Projects from "../../Assets/icons/book.svg";
import Contact from "../../Assets/icons/chat.svg";
import { useState } from "react";
function Header() {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <header className="header">
      <a href="/">
        <img src={Logo} alt="" />

        {/* <h3 className="logo">PORTAFOLIO</h3> */}
      </a>
      <div className="menu-hamburger" onClick={handleToggle}>
        <a href="#Menu" className="hamburger">
          <img src={Menu} alt="Menu" />
        </a>
      </div>
      <nav className="nav-links">
        <ul>
          <li>
            <a href="#about">
              <img src={About} alt="About" />
              Sobre mí
            </a>
          </li>
          <li>
            <a href="#projects">
              <img src={Projects} alt="Projects" />
              Proyectos
            </a>
          </li>
          <li>
            <a href="#contact">
              <img src={Contact} alt="Contact" />
              Contáctame
            </a>
          </li>
        </ul>
      </nav>
      <div className={isActive ? "menu open" : "menu close"}>
        <div>
          <a href="#about">
            <div title="About" className="menu-link">
              <img src={About} alt="About" />
              Sobre mí
            </div>
          </a>
        </div>
        <div>
          <a href="#projects">
            <div title="Projects" className="menu-link">
              <img src={Projects} alt="Projects" />
              Proyectos
            </div>
          </a>
        </div>
        <div>
          <a href="#contact">
            <div title="Contact" className="menu-link">
              <img src={Contact} alt="Contact" />
              Contáctame
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
