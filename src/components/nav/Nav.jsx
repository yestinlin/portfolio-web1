import React from "react";
import { AiOutlineHome, AiOutlineContacts } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import "./Nav.css";
import { useState } from "react";

export default function Nav() {
  const [isActive, setIsActive] = useState("#");
  return (
    <div>
      <nav>
        <a
          href="#"
          onClick={() => {
            setIsActive("#");
          }}
          className={isActive === "#" ? "active" : ""}
        >
          <AiOutlineHome />
        </a>
        <a
          href="#about"
          onClick={() => {
            setIsActive("#about");
          }}
          className={isActive === "#about" ? "active" : ""}
        >
          <SiAboutdotme />
        </a>
        <a
          href="#experience"
          onClick={() => {
            setIsActive("#experience");
          }}
          className={isActive === "#experience" ? "active" : ""}
        >
          <GiSkills />
        </a>
        <a
          href="#contact"
          onClick={() => {
            setIsActive("#contact");
          }}
          className={isActive === "#contact" ? "active" : ""}
        >
          <AiOutlineContacts />
        </a>
      </nav>
    </div>
  );
}
