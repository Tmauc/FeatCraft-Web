import React from 'react';
import styled from 'styled-components';
import { HeaderWrapperStyle, HeaderLogoStyle, HeaderPagesStyle, HeaderLinkStyle } from 'components/parts/Header/Header.style';
import Logo from 'assets/Logo.png';
import { useWindowSize } from 'utils/windowSize.util';
import { size } from 'foundation/deviceSize';

function Header() {
  const [width] = useWindowSize();
  const isMobile = width <= parseInt(size.mobile);

  return (
    <HeaderWrapper>
      {!isMobile ?
        <>
          <HeaderPages>
            <HeaderLink href="#players">Membres</HeaderLink>
            <HeaderLink disabled={true} href="#">Lives</HeaderLink>
            <HeaderLink disabled={true} href="#">Vidéos</HeaderLink>
          </HeaderPages>
          <HeaderLogo src={Logo}></HeaderLogo>
          <HeaderPages>
            <HeaderLink disabled={true} href="#">Infos</HeaderLink>
            <HeaderLink disabled={true} href="#">Téléchargement</HeaderLink>
            <HeaderLink disabled={true} href="#">Contact</HeaderLink>
          </HeaderPages>
        </>
        :
        <HeaderLogo src={Logo}></HeaderLogo>
      }
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`${HeaderWrapperStyle}`
const HeaderLogo = styled.img`${HeaderLogoStyle}`
const HeaderPages = styled.div`${HeaderPagesStyle}`
const HeaderLink = styled.a`${HeaderLinkStyle}`

export default Header;
