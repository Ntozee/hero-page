"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import navbar from "./Navbar.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import FlipCard from "../FlipCard/FlipCard";

const Navbar = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div className={navbar.parent}>
      <div className={navbar.brand} onMouseEnter={() => setIsFlipped(true)} onMouseLeave={() => setIsFlipped(false)}>
        <FlipCard 
          isFlipped={isFlipped} 
          front={
            <Link className={navbar.logo} href="/">
              MyLogo
            </Link>
          } 
          back={
            <div className={navbar.description}>
              Welcome to my hero page where I show you some of my front-end skills
              with a minimalistic design.
            </div>
          }
        />
      </div>
      <div className={navbar.links}>
        <Link className={navbar.link} href="/about">
          About
        </Link>
        <div className={navbar.dropdown}>
          <Link className={navbar.link} href="/parent-page">
            Parent Page
          </Link>
          <FontAwesomeIcon className={navbar.icon} icon={faChevronDown} />{" "}
          <div className={navbar.dropdownList}>
            <Link href="/sub-page">Sub Page</Link>
          </div>
        </div>
      </div>
      <div className={navbar.burgerMenu}>
        <FontAwesomeIcon className={navbar.menu} icon={faBars} />
      </div>
      <div className={navbar.media}>
        <Link className={navbar.link} href="/facebook">
          <FontAwesomeIcon icon={faFacebook} />
        </Link>
        <Link className={navbar.link} href="/twitter">
          <FontAwesomeIcon icon={faTwitter} />
        </Link>
        <Link className={navbar.link} href="/linkedin">
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
