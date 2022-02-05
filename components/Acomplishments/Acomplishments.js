import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";
import { data } from "../../constants/constants";

const Acomplishments = () => {
  return (
    <Section>
      <SectionDivider />
      <br />
      <SectionTitle>Personal Achievements</SectionTitle>
      <Boxes>
        {data.map((data, i) => (
          <Box key={i}>
            <BoxNum>{+data.number}</BoxNum>
            <BoxText>{data.text}</BoxText>
          </Box>
        ))}
      </Boxes>
    </Section>
  );
};

export default Acomplishments;
