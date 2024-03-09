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
<LinkItem href='tel: +46709457651'>
+46709457651
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
        Innovating one project at a time.
      </Slogan>
    </CompanyContainer>
    
  </SocialIconsContainer>
</FooterWrapper>
  );
};

export default Footer;
