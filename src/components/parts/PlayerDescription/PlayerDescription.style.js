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

export const PlayerDescWrapperStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background-image: url(${p => getBackground(p.randomBackground)});
  background-position: center;
  background-size: cover;
  border-radius: ${pxToRem(50)};
  border: ${pxToRem(2)} solid hsla(${grey30}, 0);
  
  & > *:not(:last-child) {
    ${mb(4)};
  };
  &:hover {
    border-color: hsl(${grey30});
  }
  ${py(6)};
  ${mb(4)};
`

export const PlayerDescImgStyle = css`
  height: ${pxToRem(250)};
`

export const PlayerDescButtonsWrapperStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > *:not(:last-child) {
    ${mb(1)};
  };
`

export const PlayerDescPseudoStyle = css`
  ${TitleXXL()};
  color: hsl(${WhiteText});
`