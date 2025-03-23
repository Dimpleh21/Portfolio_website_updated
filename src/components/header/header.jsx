import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import ME from "../../assets/me1 1.svg";
import "./Header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import About from "../About/About";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        {/* 3D Play/Pause Button */}

        {/* Play/Pause Button */}

        {/* Equalizer Animation */}

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

// Styles
const buttonStyle = {
  position: "absolute",
  top: "20px",
  right: "20px",
  zIndex: 1000,
  padding: "15px 20px",
  fontSize: "20px",
  background: "linear-gradient(145deg, #d2af76, #b89050)",
  border: "none",
  color: "#fff",
  cursor: "pointer",
  borderRadius: "50%",
  boxShadow:
    "5px 5px 10px rgba(0,0,0,0.3), -5px -5px 10px rgba(255,255,255,0.1)",
  transformStyle: "preserve-3d",
};

const equalizerStyle = {
  display: "flex",
  gap: "8px",
  position: "absolute",
  top: "80px",
  right: "20px",
};

const barStyle = {
  width: "10px",
  height: "50px",
  backgroundColor: "#4cd137",
  borderRadius: "5px",
  transformOrigin: "bottom",
};

export default Header;
