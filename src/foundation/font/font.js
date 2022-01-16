import { css } from "styled-components";
import { pxToRem } from "foundation/scalings";

export const TitleXXL = () => css`
  font-family: 'Nunito';
  font-weight: 700;
  font-size: ${pxToRem(27)};
  font-style: normal;
  line-height: ${pxToRem(31)};
`

export const TitleXL = () => css`
  font-family: 'Nunito';
  font-weight: 700;
  font-size: ${pxToRem(21)};
  font-style: normal;
  line-height: ${pxToRem(27)};
`