import React from "react";
import "./Footer.css";
import { AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">
        EGAT
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://github.com">
          <AiFillLinkedin />
        </a>
      </div>

      <div className="footer__copyright">
        {" "}
        <small>&copy; Justin Lin. All rights reserved.</small>
      </div>
    </footer>
  );
}
