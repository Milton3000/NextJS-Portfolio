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
        Milton<br />
        Kristoffersson
      </SectionTitle>
      <SectionText>
        I am a fullstack developer student with a passion for creating visually
        appealing <br /> and user-friendly websites.
      </SectionText>
      <Button
        onClick={() =>
          (window.location.href = "mailto:kristofferssonmilton@gmail.com")
        }
      >
        Get in Touch
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
