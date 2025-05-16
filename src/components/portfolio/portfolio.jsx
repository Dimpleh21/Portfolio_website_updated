import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/a1.png";
import IMG2 from "../../assets/Pf.png";
import IMG3 from "../../assets/outfit.png";

import IMG8 from "../../assets/p5.png";
import IMG9 from "../../assets/p6.png";
import IMG10 from "../../assets/p7.png";
import IMG11 from "../../assets/p9.png";
import IMG12 from "../../assets/kn.png";
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>WishLink</h3>
          <h4>
            A collaborative space to manage, share, and track wishlists
            effortlessly. Add products, invite friends, and stay aligned all in
            one place.
          </h4>
          <div className="portfolio_item-cta">
            <a href="https://github.com/Dimpleh21/Wishlink" className="btn">
              Github
            </a>
            <a
              href="https://wishlink-nu.vercel.app/"
              className="btn btn-primary"
            >
              Demo Link
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>PatientFirst</h3>
          <h4>A Decentralised Health Records management tool.</h4>
          <div className="portfolio_item-cta">
            <a href="https://github.com/Dimpleh21/Meddit" className="btn">
              Github
            </a>
            <a
              href="https://new-proj-lime.vercel.app/"
              className="btn btn-primary"
            >
              Demo Link
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Outfit visualizer and recommendation system-Myntra Hackerramp</h3>
          <h4>
            A WebGL based Virtual try on solution with trend recommendation
            system
          </h4>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/YATHAGROVER/myntra-hackerramp-submission"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://drive.google.com/file/d/1QV8FZgmyzNJVRrHdrDKBy166pEWxMDVp/view"
              className="btn btn-primary"
            >
              Demo
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
            {/* <a
              href="https://www.figma.com/file/Lp0COXGP6QZzu97tuhYoKN/Untitled?type=design&mode=design&t=RdZSNJIa2SaXrnsL-0"
              className="btn btn-primary"
            >
              Figma Link
            </a> */}
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
            {/* <a
              href="https://www.figma.com/file/Yfvkfg6gIm663ZiYKae1ry/Untitled?type=design&node-id=0-1&mode=design&t=BzWJFcFnWFirUcCF-0"
              className="btn btn-primary"
            >
              Figma Link
            </a> */}
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG12} alt="" />
          </div>
          <h3>E-Commerce Website with Dashboard</h3>
          <h4>
            KN Udyog is a dedicated e-commerce platform designed to showcase and
            sell authentic Jaipuri traditional footwear. The website provides a
            seamless shopping experience, allowing customers to explore a wide
            range of handcrafted mojris and juttis while supporting local
            artisans.
          </h4>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className="btn">
              Github
            </a>
            <a href="https://knudyog.vercel.app/" className="btn btn-primary">
              Demo Link
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
            {/* <a
              href="https://www.figma.com/file/4dNdidBp9AvEHkphSe3vL9/E-cell%2FNITH?type=design&node-id=1896-3494&mode=design&t=RdZSNJIa2SaXrnsL-0"
              className="btn btn-primary"
            >
              Figma Link
            </a> */}
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
              href="https://e-crescendo.netlify.app/"
              className="btn btn-primary"
            >
              Link to the Website
            </a>
          </div>
        </article>
        {/* <article className="portfolio_item">
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
        </article> */}
      </div>
    </section>
  );
};

export default Portfolio;
