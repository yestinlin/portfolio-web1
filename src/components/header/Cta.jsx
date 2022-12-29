import React from "react";
import CV from "../../assets/SoftwareEngineer-mingying.pdf";

export default function Cta() {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
}
