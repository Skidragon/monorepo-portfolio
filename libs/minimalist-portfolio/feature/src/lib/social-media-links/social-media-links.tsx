import styled from 'styled-components';
import Image from 'next/image';
/* eslint-disable-next-line */
export interface SocialMediaLinksProps {}

const SocialList = styled.ul`
  display: flex;
  align-items: baseline;
  color: white;
  stroke: white;
  background: white;
  & > li + li {
    margin-left: 1rem;
  }
  @media screen and (min-width: 40em) {
    margin-left: auto;
  }
`;

export function SocialMediaLinks(props: SocialMediaLinksProps) {
  return (
    <SocialList>
      <li>
        <a href="https://github.com/Skidragon">
          <Image width="25" height="25" src="/github.svg" alt="" />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/simon-k-davis/">
          <Image width="25" height="25" src="/linkedin.svg" alt="" />
        </a>
      </li>
    </SocialList>
  );
}

export default SocialMediaLinks;
