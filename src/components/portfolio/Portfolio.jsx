import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "This is a portfolio item title",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/20166440-Electrocars-website",
  },
  {
    id: 2,
    image: IMG1,
    title: "This is a portfolio item title",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/20166440-Electrocars-website",
  },
  {
    id: 3,
    image: IMG1,
    title: "This is a portfolio item title",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/20166440-Electrocars-website",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map((item) => {
          return (
            <article key={item.id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={item.image} alt="portfolio1" />
              </div>
              <h3>{item.title}</h3>
              <div className="portfolio__item-cta">
                {" "}
                <a href={item.github} className="btn">
                  Github
                </a>
                <a
                  href={item.demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
