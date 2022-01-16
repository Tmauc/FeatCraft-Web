import { css } from 'styled-components'
import { WhiteText, black, grey30 } from 'foundation/colors'
import { pxToRem, py, mb, mr } from 'foundation/scalings'
import { TitleXXL } from 'foundation/font/font'
import BackPlayer from 'assets/back3.png'

export const PlayerDescriptionWrapperStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: ${pxToRem(500)};
  background-image: linear-gradient(to bottom, hsla(${black}, .5), hsla(${black}, .5)), url(${BackPlayer});
  background-position: center;
  border-radius: ${pxToRem(50)};
  & > *:not(:last-child) {
    ${mb(4)};
  };
  &:hover {
    border: ${pxToRem(2)} solid hsl(${grey30});
  }
  ${py(6)};
  ${mb(4)};
`

export const PlayerDescriptionImgStyle = css`
  height: ${pxToRem(250)};
`

export const PlayerDescriptionPagesStyle = css`
  display: flex;
  & > *:not(:last-child) {
    ${mr(4)}
  }
`

export const PlayerDescriptionPseudoStyle = css`
  ${TitleXXL()};
  color: hsl(${WhiteText});
`