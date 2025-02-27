import React from "react";
import hero from "./Hero.module.scss";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <div className={hero.content}>
      <span className={hero.header}>
        Let&apos;s <span className={hero.specialTxt}>create</span> digital
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
