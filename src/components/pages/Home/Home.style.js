import { css } from 'styled-components'
import { black, WhiteBg } from 'foundation/colors'
import { pxToRem, py } from 'foundation/scalings'
import FeatCraftBanner from 'assets/FeatCraft_Banner.png'

export const BackHomeStyle = css`
  background-image: url(${FeatCraftBanner});
  background-size: auto 100vh;
  background-position: top;
  scroll-behavior: smooth;
  display: flex;
  flex-direction: column;
`

export const TopStyle = css`
  height: 87vh;
`

export const InLiveMembersWrapperStyle = css`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, minmax(${pxToRem(100)}, ${pxToRem(280)}));
  column-gap: 2rem;
  min-height: 100vh;
  width: 100%;
  background-color: hsl(${black});
  box-shadow: ${pxToRem(1)} ${pxToRem(0)} ${pxToRem(24)} ${pxToRem(27)} hsl(${black});
  ${py(2)}
`
export const DividerStyle = css`
  align-self: center;
  justify-content: center;
  height: ${pxToRem(1)};
  width: 80%;
  background-color: hsl(${WhiteBg});
`
