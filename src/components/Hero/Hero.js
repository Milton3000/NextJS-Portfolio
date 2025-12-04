import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Milton
        <br />
        Kristoffersson
      </SectionTitle>
      <SectionText>
        Fullstack Developer
      </SectionText>
      <Button
        onClick={() =>
          window.open("https://miltonkristoffersson.my.canva.site/updated", "_blank")
        }
      >
        Resume
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
