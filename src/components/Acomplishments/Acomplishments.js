import React from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

// Can move to constants folder later, but it's quite short.
const data = [
  { number: 5, text: 'Open Source Projects'},
  { number: 4, text: 'Certficates', },
  { number: 2, text: 'Github Followers', },
  { number: 1, text: 'Shiba Inu', icon: '/images/luna.png' } // Changed the icon filename to 'luna.png'
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
          {index === data.length - 1 && card.icon && <img src={card.icon} alt="luna" style={{ maxWidth: '40px', maxHeight: '40px', marginLeft: '160px' }} />} {/* Add this line to conditionally render the image and set its maximum width and height */}
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
