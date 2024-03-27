import React from "react";

const CTA = () => {
  return (
    <div className="cta">
      <a
        href="https://drive.google.com/file/d/1BJL9Q6gIa-ZDeVbdHNqIhrCqUDnq0qJe/view?usp=sharing"
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
