import { css } from 'styled-components'
import { black, WhiteText } from 'foundation/colors'
import { pxToRem, pyx, mr } from 'foundation/scalings'
import { LabelS, LabelM, LabelL } from 'foundation/font/font'

export const FooterWrapperStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${pxToRem(100)};
  width: 100vw;
  background-color: hsla(${black}, 1);
  ${pyx(2, 1)};
  & > *:not(:last-child) {
    ${mr(5)}
  }
`

export const FooterLeftStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;

  & > *:not(:last-child) {
    ${mr(2)}
  }
`

export const FooterRightStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;

  & > *:not(:last-child) {
    ${mr(2)}
  }
`

export const FooterLogoStyle = css`
  max-height: ${pxToRem(30)};
`

export const FooterLinkStyle = css`
  ${LabelS()};
  color: hsl(${WhiteText});
  text-decoration: none;
  cursor: pointer;

  &:hover:enabled {
    color: hsla(${WhiteText}, .7);
  }
`

export const FooterLinkDevStyle = css`
  ${LabelL()};
  color: hsl(${WhiteText});
  text-decoration: none;
  cursor: pointer;

  &:hover:enabled {
    color: hsla(${WhiteText}, .7);
  }
`

export const FooterLabelStyle = css`
  ${LabelM()};
  color: hsl(${WhiteText});
`