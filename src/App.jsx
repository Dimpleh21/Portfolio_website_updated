import React from "react";
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import About from "./components/About/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/Experience/Experience";
import Portfolio from "./components/portfolio/portfolio";
import Footer from "./components/footer/footer";
import Parallax from "./components/Parallax/parallax";

const App = () => {
  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      {/* Parallax Background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: -1,
        }}
      >
        <Parallax />
      </div>

      {/* Foreground Content */}
      <div style={{ position: "relative", zIndex: 1, padding: "20px" }}>
        <Header />
        <Nav />
        {/* <About /> */}
        <Experience />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
