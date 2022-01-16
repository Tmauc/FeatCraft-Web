import { css } from 'styled-components'
import { black, DisabledText, WhiteText } from 'foundation/colors'
import { pxToRem, pyx, mx, mr } from 'foundation/scalings'
import { TitleXL } from 'foundation/font/font'

export const HeaderWrapperStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${pxToRem(100)};
  width: 100vw;
  background-color: hsla(${black}, .6);
  border: 0;
  position: sticky;
  top: 0;
  ${pyx(2, 20)};
`

export const HeaderLogoStyle = css`
  max-height: ${pxToRem(70)};
  ${mx(4)}
`

export const HeaderPagesStyle = css`
  display: flex;
  & > *:not(:last-child) {
    ${mr(4)}
  }
`

export const HeaderLinkStyle = css`
  ${TitleXL()};
  color: hsl(${WhiteText});
  text-decoration: none;
  cursor: ${p => p.disabled ? 'not-allowed' : 'pointer'};
  
  ${p => {
    if (p.disabled) {
      return `
        color: hsla(${DisabledText}, 0.5);
      `
    }
  }};

  &:hover:enabled {
    color: hsla(${WhiteText}, .7);
  }
`