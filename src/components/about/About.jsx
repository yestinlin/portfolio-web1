import React from "react";
import "./About.css";
import ME from "../../assets/me.jpg";
import { FiAward } from "react-icons/fi";
import { BsCodeSquare } from "react-icons/bs";
import { MdSettingsSystemDaydream } from "react-icons/md";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know me</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div>
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About" />
            </div>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiAward className="about__icon" />
              <h5>UI/UX</h5>

              {/* <small>Hello</small> */}
            </article>
            <article className="about__card">
              <BsCodeSquare className="about__icon" />
              <h5>Frontend</h5>
              {/* <small>Hello</small> */}
            </article>
            <article className="about__card">
              <MdSettingsSystemDaydream className="about__icon" />
              <h5>Backend</h5>
              {/* <small>Hello</small> */}
            </article>
          </div>
          <p>
            I am Mingying (Justin), a passionate designer and full-stack
            developer with a human-computer interaction background and some
            experience in web and app projects' front-end development. I have
            mastered UI/UX design, and Front-end development and continue to
            build skills in Full-stack and blockchain in my free time. I also
            have experience working with React, JavaScript/ES6/ES7, TypeScript,
            Redux, and SASS. A hard-working and self-managed person who loves to
            innovate new products.
          </p>
          <div className="about__me-btn">
            <button href="#contact" className="btn btn-primary">
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
