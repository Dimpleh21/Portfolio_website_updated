import React from "react";
import "./footer.css";
import { FaGithub } from "react-icons/fa";
const footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        Link to the Code
        <a
          href=" https://github.com/Dimpleh21"
          target="_blank"
          className="Icon"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default footer;
