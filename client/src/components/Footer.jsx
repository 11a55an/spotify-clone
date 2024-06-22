import React from 'react';
import styled from 'styled-components';
import { RiGithubFill} from 'react-icons/ri';

const StyledFooter = styled.footer`
  padding: 1.6rem 3.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 1.2rem;
  color: var(--color-text-sub);
`;

const Links = styled.div`
  display: flex;
  gap: 1.2rem;
`;

const Link = styled.a`
  height: 4rem;
  width: 4rem;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  background: #292929;
  border-radius: 5rem;

  svg {
    color: #fff;
    font-size: 1.6rem;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>Spotify Clone by Hassan Tahir and Sheraz Ahmed</p>
      <Links>
        <Link href="https://github.com/11a55an" target="_blank">
          <RiGithubFill />
        </Link>
        <Link href="https://github.com/SherazAhmed100" target="_blank">
          <RiGithubFill />
        </Link>
      </Links>
    </StyledFooter>
  );
};

export default Footer;
