import { css } from 'styled-components'
import { WhiteText, black, grey30 } from 'foundation/colors'
import { pxToRem, py, mb, mr } from 'foundation/scalings'
import { TitleXXL } from 'foundation/font/font'
import BackPlayer1 from 'assets/PlayersBack/BackPlayer1.png'
import BackPlayer2 from 'assets/PlayersBack/BackPlayer2.png'
import BackPlayer3 from 'assets/PlayersBack/BackPlayer3.png'

const getBackground = (randomBackground) => {
  switch (randomBackground) {
    case 1:
      return BackPlayer1;
    case 2:
      return BackPlayer2;
    case 3:
      return BackPlayer3;
    default:
      return BackPlayer1;
  }
}

export const PlayerDescriptionWrapperStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: ${pxToRem(500)};
  background-image: linear-gradient(to bottom, hsla(${black}, .5), hsla(${black}, .3)), url(${p => getBackground(p.randomBackground)});
  background-position: center;
  background-size: cover;
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