import React from "react";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

// Can move to constants folder later, but it's quite short.
const data = [
  { number: 5, text: "Open Source Projects" },
  { number: 4, text: "Certificates" },
  { number: 3, text: "Github Followers" },
  { number: 1, text: "Shiba Inu", icon: "/images/luna.png" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText style={{ position: "relative" }}>
            {card.text}
            {index === data.length - 1 && card.icon && (
              <>
                <span style={{ visibility: "hidden" }}>Shiba Inu</span>
                <img
                  src={card.icon}
                  alt="luna"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "100%",
                    transform: "translate(-100%, -50%)",
                    maxWidth: "40px",
                    maxHeight: "40px",
                    marginLeft: "10px",
                  }}
                />
              </>
            )}
          </BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
