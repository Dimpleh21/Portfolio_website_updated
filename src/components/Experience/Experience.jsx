import React from "react";
import "./Experience.css";
import Internships from "../internships/internships";
import Profiles from "../profiles/prof";

// Import logos
import htmlLogo from "../../assets/html.svg";
import cssLogo from "../../assets/css.webp";
import jsLogo from "../../assets/js.png";
import reactLogo from "../../assets/react.svg";
import nextjsLogo from "../../assets/njs.svg";
import nodejsLogo from "../../assets/nodejs.svg";
import mongoLogo from "../../assets/mongo.svg";
import mysqlLogo from "../../assets/sql.png";
import awsLogo from "../../assets/aws.png";
import dockerLogo from "../../assets/docker.png";
import gitLogo from "../../assets/ts.svg";
import githubLogo from "../../assets/gt.svg";
import cppLogo from "../../assets/cpp.png";
import goLogo from "../../assets/go.jpg";
import websocket from "../../assets/websocket.png";
import webRTC from "../../assets/webrtc.jpg";
import postgre from "../../assets/psql.jpg";
// Categorized skills with logos
const skills = [
  { name: "HTML", logo: htmlLogo },
  { name: "CSS", logo: cssLogo },
  { name: "JavaScript", logo: jsLogo },
  { name: "React.js", logo: reactLogo },
  { name: "Next.js", logo: nextjsLogo },
  { name: "Node.js", logo: nodejsLogo },
  { name: "MongoDB", logo: mongoLogo },
  { name: "MySQL", logo: mysqlLogo },
  { name: "AWS", logo: awsLogo },
  { name: "Docker", logo: dockerLogo },
  { name: "TypeScript", logo: gitLogo },
  { name: "GitHub", logo: githubLogo },
  { name: "C++", logo: cppLogo },
  { name: "Go", logo: goLogo },
  { name: "WebRTC", logo: webRTC },
  { name: "Websockets", logo: websocket },
  { name: "PostgreSQL", logo: postgre },
];

const Experience = () => {
  return (
    <>
      <section id="experience">
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
        <div className="experience_card">
          <div className="skills_grid">
            {skills.map((skill) => (
              <div key={skill.name} className="skill_item">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  title={skill.name}
                  className="skill_logo"
                />
                <p className="skill_name">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div>
        <Internships />
        <Profiles />
      </div>
    </>
  );
};

export default Experience;
