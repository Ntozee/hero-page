import Link from "next/link";
import React from "react";
import hero from "./Hero.module.scss";
import Button from "../Button/Button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={hero.content}>
      <span className={hero.header}>
        Let's <span className={hero.specialTxt}>create</span> digital
        experiences.
      </span>
      <div className={hero.text}>
        Collaborating with creative smart people to turn pages to heros.
      </div>
      <Button />
      <div className={hero.graphic}></div>
    </div>
  );
};

export default Hero;
