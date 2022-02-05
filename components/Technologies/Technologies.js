import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  SiCss3,
  SiJavascript,
  SiMaterialui,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiStyledcomponents,
} from "react-icons/si";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => {
  return (
    <Section nopadding id="tech">
      <br />
      <SectionDivider />
      <br />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I&apos;ve worked with a range of technologies in the web development
        world. From Back-end to Design and Testing.
      </SectionText>
      <List>
        <ListItem>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "1rem",
              marginLeft: "2rem",
            }}
          >
            <SiJavascript size="3rem" />
            <SiReact size="3rem" />
            <SiNextdotjs size="3rem" />
          </div>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experience with <br /> JavaScript, React.js & Next.js.
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "1rem",
              marginLeft: "2rem",
            }}
          >
            <SiNodedotjs size="3rem" />
            <SiMongodb size="3rem" />
            <SiPython size="3rem" />
          </div>
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experience with <br /> Node.js, Python & Databases.
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "1rem",
              marginLeft: "2rem",
            }}
          >
            <SiCss3 size="3rem" />
            <SiStyledcomponents size="3rem" />
            <SiMaterialui size="3rem" />
          </div>
          <ListContainer>
            <ListTitle>UI/UX</ListTitle>
            <ListParagraph>
              Experience with <br /> Styled-Components & CSS.
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
  );
};

export default Technologies;
