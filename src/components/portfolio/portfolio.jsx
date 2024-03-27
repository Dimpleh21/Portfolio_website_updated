import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/6523230.jpg";
import IMG2 from "../../assets/6523230.jpg";
import IMG3 from "../../assets/p3.jpg";
import IMG4 from "../../assets/p2.jpg";
import IMG5 from "../../assets/p4.jpg";
import IMG6 from "../../assets/E8.png";
import IMG7 from "../../assets/E9.png";
import IMG8 from "../../assets/p5.png";
import IMG9 from "../../assets/p6.png";
import IMG10 from "../../assets/p7.png";
import IMG11 from "../../assets/p9.png";
import IMG12 from "../../assets/p10.png";
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>RevNow</h3>
          <h4>
            A complaint register for NITH students that makes their life better
            by making complaints more and more transparent
          </h4>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/Dimpleh21/solutionists-project"
              className="btn"
            >
              Github
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG9} alt="" />
          </div>
          <h3>CabZEE</h3>
          <h4>
            A taxi-booking platform for NITH students that makes their ride
            hassle free and much more convenient.
          </h4>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/preyanshu/cabzee_frontend"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://www.figma.com/file/Lp0COXGP6QZzu97tuhYoKN/Untitled?type=design&mode=design&t=RdZSNJIa2SaXrnsL-0"
              className="btn btn-primary"
            >
              Figma Link
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG8} alt="" />
          </div>
          <h3>MedAnal</h3>
          <h4>
            A CNN based web app that helps common people to detect the presence
            of certain diseases in their body, this is particularly for
            pneumonia prediction right now.
          </h4>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className="btn">
              Github
            </a>
            <a
              href="https://www.figma.com/file/Yfvkfg6gIm663ZiYKae1ry/Untitled?type=design&node-id=0-1&mode=design&t=BzWJFcFnWFirUcCF-0"
              className="btn btn-primary"
            >
              Figma Link
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG11} alt="" />
          </div>
          <h3>E-Summit 2k24 Official Website</h3>
          <h4>
            Collaborated with the team of E-Summit NITH to design and create a
            website for E-Summit 2k24.
          </h4>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/Shryansh107/ecellfrontend"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://www.figma.com/file/4dNdidBp9AvEHkphSe3vL9/E-cell%2FNITH?type=design&node-id=1896-3494&mode=design&t=RdZSNJIa2SaXrnsL-0"
              className="btn btn-primary"
            >
              Figma Link
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG10} alt="" />
          </div>
          <h3>E-Cressando 2k24 Official Website</h3>
          <h4>
            Collaborated with the team of E-cressando NITH to design and create
            a website for E-cressando 2k24.
          </h4>
          <div className="portfolio_item-cta">
            <a href="https://github.com/Karanpal97/e-cressando" className="btn">
              Github
            </a>
            <a
              href="https://www.figma.com/file/4dNdidBp9AvEHkphSe3vL9/E-cell%2FNITH?type=design&node-id=1011-909&mode=design&t=RdZSNJIa2SaXrnsL-0"
              className="btn btn-primary"
            >
              Figma Link
            </a>
            <a
              href="https://e-crescendo.netlify.app/"
              className="btn btn-primary"
            >
              Link to the Website
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG12} alt="" />
          </div>
          <h3>UX Case Study.</h3>
          <h4>Case study on overall user experience of Uber Application.</h4>
          <div className="portfolio_item-cta">
            <a
              href="https://e-crescendo.netlify.app/"
              className="btn btn-primary"
            >
              Link to the Notion Website
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
