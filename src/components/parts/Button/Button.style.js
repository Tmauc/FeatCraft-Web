import { css } from 'styled-components'
import { WhiteText } from 'foundation/colors'
import { pxToRem, pyx } from 'foundation/scalings'
import { TitleXL } from 'foundation/font/font'

export const ButtonWrapperStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(${p => p.backColor});
  border-radius: ${pxToRem(20)};
  border: 0;
  width: ${pxToRem(150)};
  cursor: pointer;
  ${pyx(1, 2)};
`

export const ButtonLabelStyle = css`
  ${TitleXL()};
  color: hsl(${WhiteText});
  cursor: pointer;

  &:hover {
    color: hsla(${WhiteText}, .7);
  }
`