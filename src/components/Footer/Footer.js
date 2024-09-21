import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
<FooterWrapper>
  <LinkList>
  <LinkColumn>
  <LinkTitle>
  Call
  </LinkTitle>
<LinkItem href='tel: +46723423550'>
+46723423550
</LinkItem>
  </LinkColumn>
  <LinkColumn>
  <LinkTitle>
  Email
  </LinkTitle>
<LinkItem href='mailto:kristofferssonmilton@gmail.com'>
kristofferssonmilton@gmail.com
</LinkItem>
  </LinkColumn>
  </LinkList>
  <SocialIconsContainer>
    <CompanyContainer>
      <Slogan>
        Challenge the digital status quo.
      </Slogan>
    </CompanyContainer>
    <SocialContainer> 
    <SocialIcons href="https://github.com/Milton3000" target="_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/milton-kristoffersson90" target="_blank">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/miltonkristoffersson/" target="_blank">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      </SocialContainer>
  </SocialIconsContainer>
</FooterWrapper>
  );
};

export default Footer;
