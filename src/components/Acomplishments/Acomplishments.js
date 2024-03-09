import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';


// Can move to constants folder later, but it's quite short.
const data = [
  { number: 5, text: 'Open Source Projects'},
  { number: 4, text: 'Certficates', },
  { number: 2, text: 'Github Followers', },
  { number: 1, text: 'Shiba Inu', }
];

const Acomplishments = () => (
<Section>
  <SectionTitle>
    Personal Accomplishments
  </SectionTitle>
  <Boxes>
    {data.map((card, index) => (
      <Box key={index}>
<BoxNum>
  {card.number}+
</BoxNum>
<BoxText>{card.text}</BoxText>
      </Box>
    ))}
  </Boxes>
</Section>
);

export default Acomplishments;
