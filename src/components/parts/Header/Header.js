import React from 'react';
import styled from 'styled-components';
import { HeaderWrapperStyle, HeaderLogoStyle, HeaderPagesStyle, HeaderLinkStyle } from 'components/parts/Header/Header.style';
import Logo from 'assets/Logo.png';

function Header() {
  return (
    <HeaderWrapper>
      <HeaderPages>
        <HeaderLink href="#players">Membres</HeaderLink>
        <HeaderLink href="#">Lives</HeaderLink>
        <HeaderLink href="#">Vidéos</HeaderLink>
      </HeaderPages>
      <HeaderLogo src={Logo}></HeaderLogo>
      <HeaderPages>
        <HeaderLink href="#">Infos</HeaderLink>
        <HeaderLink href="#">Téléchargement</HeaderLink>
        <HeaderLink href="#">Contact</HeaderLink>
      </HeaderPages>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`${HeaderWrapperStyle}`
const HeaderLogo = styled.img`${HeaderLogoStyle}`
const HeaderPages = styled.div`${HeaderPagesStyle}`
const HeaderLink = styled.a`${HeaderLinkStyle}`

export default Header;
