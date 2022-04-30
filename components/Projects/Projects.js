import React from "react";
import Image from "next/image";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => {
  return (
    <Section nopadding id="projects">
      <br />
      <SectionDivider />
      <br />
      <SectionTitle>React & JS Projects</SectionTitle>
      <GridContainer>
        {projects
          .filter((project) => project.id.startsWith("fr"))
          .map(({ id, image, title, description: desc, tags, live, code }) => {
            return (
              <BlogCard key={id}>
                <Img src={image} alt={title} />
                <TitleContent>
                  <HeaderThree title>{title}</HeaderThree>
                  <Hr />
                </TitleContent>
                <CardInfo>{desc}</CardInfo>
                <Hr />
                <div>
                  <TitleContent>Stack</TitleContent>
                  <TagList>
                    {tags.map((tag, i) => (
                      <Tag key={i}>{tag}</Tag>
                    ))}
                  </TagList>
                </div>
                <UtilityList>
                  <ExternalLinks href={code} target="_blank">
                    Code
                  </ExternalLinks>
                  <ExternalLinks href={live} target="_blank">
                    Live
                  </ExternalLinks>
                </UtilityList>
              </BlogCard>
            );
          })}
      </GridContainer>
      <br />
      <SectionDivider />
      <br />
      <SectionTitle>Node JS Projects</SectionTitle>
      <GridContainer>
        {projects
          .filter((project) => project.id.startsWith("fs"))
          .map(({ id, image, title, description: desc, tags, live, code }) => {
            return (
              <BlogCard key={id}>
                <Img src={image} alt={title} />
                <TitleContent>
                  <HeaderThree title>{title}</HeaderThree>
                  <Hr />
                </TitleContent>
                <CardInfo>{desc}</CardInfo>
                <Hr />
                <div>
                  <TitleContent>Stack</TitleContent>
                  <TagList>
                    {tags.map((tag, i) => (
                      <Tag key={i}>{tag}</Tag>
                    ))}
                  </TagList>
                </div>
                <UtilityList>
                  <ExternalLinks href={code} target="_blank">
                    Code
                  </ExternalLinks>
                  <ExternalLinks href={live} target="_blank">
                    Live
                  </ExternalLinks>
                </UtilityList>
              </BlogCard>
            );
          })}
      </GridContainer>
    </Section>
  );
};

export default Projects;
