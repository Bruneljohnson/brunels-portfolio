import React, { useState, useRef, useEffect, Fragment } from "react";

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from "./TimeLineStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";
import { Span3 } from "./TimeLineStyles";

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [isItemActive, setIsItemActive] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: "smooth" });
  };

  const clickHandler = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
      );

      scroll(carouselRef.current, scrollLeft);
    }
  };

  const scrollHandler = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
          TimeLineData.length
      );

      setIsItemActive(index);
    }
  };

  // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <Section nopadding id="about">
      <br />
      <SectionDivider />
      <br />
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        I started out as a mathematician and unexpectedly became an
        internationally recognised documentary photographer. I have worked with
        some of the biggest brands and celebrities in the world like Adidas,
        Messi, ITV.
        <br /> The creative industry is interesting. However, it has not
        stimulated my mind as much as coding has in this short period of time.
        I&apos;ve fallen in love with coding and its endless possibilities.{" "}
        <br />
        Click{" "}
        <a
          target="_blank"
          href="https://www.bruneljohnson.com/"
          rel="noopener noreferrer nofollow"
        >
          <Span3>here</Span3>
        </a>{" "}
        to see my photograhy :)
      </SectionText>
      <CarouselContainer ref={carouselRef} onScroll={scrollHandler}>
        <Fragment>
          {TimeLineData.map((item, i) => (
            <CarouselMobileScrollNode
              key={i}
              final={i === TOTAL_CAROUSEL_COUNT - 1}
            >
              <CarouselItem
                key={i}
                index={i}
                id={`carousel_item-${i}`}
                active={isItemActive}
                onClick={clickHandler}
              >
                <CarouselItemTitle>
                  {item.year}
                  <CarouselItemImg
                    width="208"
                    height="6"
                    viewBox="0 0 208 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                      fill="url(#paint0_linear)"
                      fillOpacity="0.33"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="-4.30412e-10"
                        y1="0.5"
                        x2="208"
                        y2="0.500295"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" />
                        <stop
                          offset="0.79478"
                          stopColor="white"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </CarouselItemImg>
                </CarouselItemTitle>
                <CarouselItemText>{item.text}</CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </Fragment>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item, i) => (
          <CarouselButton
            key={i}
            index={i}
            id={`carousel_item-${i}`}
            active={isItemActive}
            onClick={clickHandler}
            type="button"
          >
            <CarouselButtonDot active={isItemActive} />
          </CarouselButton>
        ))}
      </CarouselButtons>
    </Section>
  );
};

export default Timeline;
