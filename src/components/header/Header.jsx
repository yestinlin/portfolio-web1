import React from "react";
import "./Header.css";
import CTA from "./Cta";
import ME from "../../assets/me-about.png";
import HeaderSocials from "./HeaderSocials";
import { AiFillCaretRight } from "react-icons/ai";

export default function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Justin</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
          <AiFillCaretRight />
        </a>
      </div>
    </header>
  );
}
