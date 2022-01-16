import React from 'react';
import styled from 'styled-components';
import { FooterWrapperStyle, FooterLeftStyle, FooterRightStyle, FooterLogoStyle, FooterLinkDevStyle, FooterLinkStyle, FooterLabelStyle } from 'components/parts/Footer/Footer.style';
import Logo from 'assets/Logo.png';

function Footer() {
  return (
    <FooterWrapper>
      <FooterLeft>
        <FooterLogo src={Logo}></FooterLogo>
        <FooterLink>Mentions légales</FooterLink>
      </FooterLeft>
      <FooterRight>
        <FooterLabel>© 2022, fait par</FooterLabel>
        <FooterLinkDev href="https://github.com/Tmauc" target="_blank">Mauc</FooterLinkDev>
      </FooterRight>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`${FooterWrapperStyle}`
const FooterLogo = styled.img`${FooterLogoStyle}`
const FooterLeft = styled.div`${FooterLeftStyle}`
const FooterRight = styled.div`${FooterRightStyle}`
const FooterLink = styled.a`${FooterLinkStyle}`
const FooterLinkDev = styled.a`${FooterLinkDevStyle}`
const FooterLabel = styled.p`${FooterLabelStyle}`

export default Footer;
