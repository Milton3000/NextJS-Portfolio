import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
<Section id="tech">
<SectionDivider />
<br />
<SectionTitle>Technologies</SectionTitle>
<SectionText>
From crafting elegant user interfaces to building
robust backend systems, I enjoy working across the full spectrum of web development.
I am proficient in HTML, CSS, Javascript, React, NOSQL/SQL & MongoDB
</SectionText>
<List>
  <ListItem>
    <DiReact size="3rem" />
    <ListContainer>
      <ListTitle>
        Front-end
      </ListTitle>
      <ListParagraph>
        Experience with <br />
        React.js
      </ListParagraph>
    </ListContainer>
  </ListItem>
  <ListItem>
    <DiFirebase size="3rem" />
    <ListContainer>
      <ListTitle>
        Back-end
      </ListTitle>
      <ListParagraph>
        Experience with <br />
        Node and Databases
      </ListParagraph>
    </ListContainer>
  </ListItem>
  <ListItem>
  {/* Change to Figma Icon below */}
    <DiZend size="3rem" /> 
    <ListContainer>
      <ListTitle>
        UI/UX
      </ListTitle>
      <ListParagraph>
        Experience with <br />
        tools like Figma
      </ListParagraph>
    </ListContainer>
  </ListItem>
</List>
</Section>
);

export default Technologies;
