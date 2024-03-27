import React from "react";
import ME from "../../assets/me1 1.svg";
import "./Header.css";

import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import About from "../About/About";
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm </h5>
        <h1>Dimple Harjani</h1>
        <CTA />
        <About />

        <HeaderSocials />

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
