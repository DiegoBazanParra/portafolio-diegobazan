import React from "react";
import "../../Styles/Contact.css";
import Footer from "./Footer";
import Redes from "./Redes";
import Waves from "./Waves";

function Contact() {
  return (
    <div className="footer" id="contact">
      <Waves />
      <div className="footer-content">
        <h2 className="footer-title">Contáctame</h2>
        <Redes />
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
