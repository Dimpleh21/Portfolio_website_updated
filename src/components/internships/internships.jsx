import "./intern.css";
import React from "react";
import Img1 from "../../assets/websitera_logo.jpeg";

// Importing Tech Stack Logos
import TypeScriptLogo from "../../assets/ts.svg";
import JavaScriptLogo from "../../assets/js.png";
import PostgreSQLLogo from "../../assets/psql.jpg";
import SCSSLogo from "../../assets/sass.png";
import RollupLogo from "../../assets/rjs.png";
import nextjs from "../../assets/njs.svg";
import GitHubActionsLogo from "../../assets/gt.svg";

export default function Intern() {
  return (
    <div className="intern-container">
      <div className="text-style">Cool companies, Cool experiences!!</div>

      <div className="company">
        <div className="text-style1">
          <div> Company Name: Websitera Housing Private Limited.</div>
          <div> Role: Software Developer Intern</div>
          <div>Duration: From Sep 2024 to Nov 2024</div>
        </div>
        <img src={Img1} className="image" alt="Websitera Logo" />
      </div>

      {/* Tech Stack Section */}
      <div className="tech-stack">
        <div className="tech-title">Tech Stacks Used:</div>
        <div className="tech-icons">
          <img src={TypeScriptLogo} alt="TypeScript" />
          <img src={JavaScriptLogo} alt="JavaScript" />
          <img src={PostgreSQLLogo} alt="PostgreSQL" />
          <img src={SCSSLogo} alt="SCSS" />
          <img src={nextjs} alt="Styled Components" />

          <img src={RollupLogo} alt="Rollup.js" />
          <img src={GitHubActionsLogo} alt="GitHub Actions" />
        </div>
      </div>
    </div>
  );
}
