import React from "react";
import hero from "./Hero.module.scss";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <div className={hero.content}>
      <span className={`${hero.header} ${hero.slideFromBottom}`}>
        Let&apos;s <span className={hero.specialTxt}>create</span> digital
        experiences.
      </span>
      <div className={`${hero.text} ${hero.slideFromBottom}`}>
        Collaborating with creative smart people to turn pages to heros.
      </div>
      <Button className={hero.slideFromBottom} title="Get Started" />
      <div className={`${hero.graphic} ${hero.slideFromBottom}`}></div>
    </div>
  );
};

export default Hero;
