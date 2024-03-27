import React from "react";

import CV from "../../assets/CV Resume.pdf";
const CTA = () => {
  return (
    <div className="cta">
      <a
        href="https://docs.google.com/document/d/1f3IP6Fa6vVA-fyq5YAdGXSTs7khDjoTY7PMUUCs78iw/edit?usp=sharing"
        download
        className="btn"
      >
        {" "}
        View my CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
