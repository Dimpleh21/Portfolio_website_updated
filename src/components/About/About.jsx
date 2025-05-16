import React from "react";
import "./About.css";
import ME from "../../assets/me.jpg";

import { GiSkills } from "react-icons/gi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="My Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <GiSkills className="about_icon" />
              <h5>Skills</h5>
              <h6>Scroll down</h6>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <h6>Scroll down</h6>
            </article>
          </div>

          <p>
            I'm Dimple Harjani, a Software Development and Web Designing
            enthusiast. I love creating unique websites that leave an impact.
            When I'm not coding, I enjoy baking, painting, and sketching.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
