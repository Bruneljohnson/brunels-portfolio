import Link from "next/link";
import React from "react";
import classes from "./Header.module.css";
import Image from "next/image";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import {
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Container,
  Span,
} from "./HeaderStyles";

const Header = () => {
  return (
    <Container>
      <Div1>
        <Link href="/" passHref={true}>
          <a className={classes.a}>
            <Span>BRUNEL JOHNSON</Span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#projects" passHref={true}>
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech" passHref={true}>
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about" passHref={true}>
            <NavLink>About</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/Bruneljohnson" target="_blank">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons
          href="https://www.linkedin.com/in/bruneljohnson"
          target="_blank"
        >
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons
          href="https://www.instagram.com/bruneljohnson"
          target="_blank"
        >
          <AiFillInstagram size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  );
};

export default Header;
