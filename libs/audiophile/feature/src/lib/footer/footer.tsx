import { Logo } from '@sd/audiophile/ui';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FooterProps {}

const devices = {
  tablet: '50em',
  desktop: '70em',
};
const StyledFooter = styled.footer`
  display: grid;
  grid-template-areas: 'logo' 'categories' 'about' 'social' 'copyright';
  grid-template-rows: repeat(5, auto);
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  position: relative;
  text-align: center;
  justify-items: center;
  color: white;
  background: black;
  padding: 3em;
  @media screen and (min-width: ${devices.tablet}) {
    grid-template-areas: 'logo .' 'categories .' 'about about' '. .' 'copyright social';
    padding: 3em 1em;
  }
  @media screen and (min-width: ${devices.desktop}) {
    grid-template-areas: 'logo categories' 'about social' 'copyright .';
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    padding: 1em 6em;
  }
`;
const PositionLogo = styled.div`
  grid-area: logo;
  position: relative;
  display: flex;
  @media screen and (min-width: ${devices.tablet}) {
    justify-self: start;
    align-self: end;
  }
  @media screen and (min-width: ${devices.desktop}) {
    justify-self: start;
    align-self: end;
  }
`;
const Line = styled.div`
  width: 5rem;
  border-bottom: 3px solid orange;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  @media screen and (min-width: ${devices.tablet}) {
    left: 1em;
    transform: translate(0, 0);
  }
  @media screen and (min-width: ${devices.desktop}) {
    left: 6em;
    transform: translate(0, 0);
  }
`;
const CategoryList = styled.ul`
  grid-area: categories;
  display: flex;
  flex-flow: column;
  & > * + * {
    margin-top: 2rem;
  }
  @media screen and (min-width: ${devices.tablet}) {
    flex-flow: row;
    justify-self: start;
    & > * + * {
      margin-top: 0;
      margin-left: 2rem;
    }
  }
  @media screen and (min-width: ${devices.desktop}) {
    margin-left: auto;
    align-self: end;
    & > * + * {
      margin-top: 0;
      margin-left: 2rem;
    }
  }
`;
const CategoryItem = styled.li``;
const CategoryLink = styled.a`
  text-transform: uppercase;
  &:hover,
  &:focus {
    color: orange;
    text-decoration: underline;
  }
`;
const AboutAudiophile = styled.p`
  grid-area: about;
  max-width: 80ch;
  color: grey;
  @media screen and (min-width: ${devices.tablet}) {
    justify-self: start;
    text-align: left;
  }
`;
const Copyright = styled.p`
  grid-area: copyright;
  @media screen and (min-width: ${devices.tablet}) {
    justify-self: start;
    text-align: left;
  }
`;
const SocialList = styled.ul`
  grid-area: social;
  display: flex;
  & > * + * {
    margin-top: 0;
    margin-left: 2rem;
  }
  @media screen and (min-width: ${devices.desktop}) {
    align-self: end;
    justify-self: end;
  }
`;
const SocialItem = styled.li``;
const SocialLink = styled.a`
  &:hover,
  &:focus {
    color: orange;
  }
`;
export function Footer(props: FooterProps) {
  return (
    <StyledFooter>
      <Line />
      <PositionLogo>
        <Logo />
      </PositionLogo>
      <CategoryList>
        <CategoryItem>
          <CategoryLink href={'#'}>Home</CategoryLink>
        </CategoryItem>
        <CategoryItem>
          <CategoryLink href={'#'}>Headphones</CategoryLink>
        </CategoryItem>
        <CategoryItem>
          <CategoryLink href={'#'}>Speakers</CategoryLink>
        </CategoryItem>
        <CategoryItem>
          <CategoryLink href={'#'}>Earphones</CategoryLink>
        </CategoryItem>
      </CategoryList>
      <AboutAudiophile>
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </AboutAudiophile>
      <Copyright>Copyright 2021. All Rights Reserved</Copyright>
      <SocialList>
        <SocialItem>
          <SocialLink href={'#'}>Home</SocialLink>
        </SocialItem>
        <SocialItem>
          <SocialLink href={'#'}>Headphones</SocialLink>
        </SocialItem>
      </SocialList>
    </StyledFooter>
  );
}

export default Footer;
