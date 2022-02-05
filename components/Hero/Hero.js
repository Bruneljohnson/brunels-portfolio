import React, { useEffect, useRef } from "react";
import { init } from "ityped";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, Span } from "./HeroStyles";

const Hero = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      startDelay: 300,
      typeSpeed: 150,
      showCursor: true,
      cursorChar: "",
      backDelay: 300,
      backSpeed: 100,
      loop: false,
      strings: [
        "Lover of Life.",
        "Lover of Maths.",
        "Photographer.",
        "MERN Developer.",
      ],
    });
  }, [init, textRef]);

  const learnMoreHandler = () => {
    document.location.href =
      "mailto:photography@bruneljohnson.com?subject=Hey%20Brunel";
  };

  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey, my name is <Span>Brunel</Span> <br />
          and I'm a <Span ref={textRef}></Span>
        </SectionTitle>
        <SectionText>
          A self-taught, highly versatile, and ambitious individual. Who is
          always up for a challenge, thrives under pressure and enjoys working
          in a team. <br /> Currently looking for a new role as a developer.
        </SectionText>
        <Button onClick={learnMoreHandler}>Hire Me?</Button>
      </LeftSection>
    </Section>
  );
};

export default Hero;
