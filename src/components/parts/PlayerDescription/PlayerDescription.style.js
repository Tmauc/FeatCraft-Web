import { css } from 'styled-components'
import { WhiteText, black, test } from 'foundation/colors'
import { pxToRem, py, mb, mr } from 'foundation/scalings'
import { TitleXXL } from 'foundation/font/font'
import BackPlayer from 'assets/back3.png'

export const PlayerDescriptionWrapperStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: ${pxToRem(500)};
  background-color: hsl(${test});
  background-image: linear-gradient(to bottom, hsla(${black}, .5), hsla(${black}, .5)), url(${BackPlayer});
  background-position: center;
  border-radius: ${pxToRem(50)};
  ${py(6)};
  & > *:not(:last-child) {
    ${mb(4)};
  }
  ${mb(4)};
`

export const PlayerDescriptionImgStyle = css`
  height: ${pxToRem(300)};
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