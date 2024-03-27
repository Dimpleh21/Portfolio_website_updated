import React from "react";
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import About from "./components/About/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/Experience/Experience";
import Portfolio from "./components/portfolio/portfolio";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      {/* <About /> */}

      <Experience />
      <Portfolio />
      <Contact />
    </>
  );
};

export default App;
