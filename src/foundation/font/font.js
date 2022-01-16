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

export const LabelL = () => css`
  font-family: 'Ubuntu';
  font-weight: 400;
  font-size: ${pxToRem(21)};
  font-style: normal;
  line-height: ${pxToRem(25)};
`

export const LabelM = () => css`
  font-family: 'Ubuntu';
  font-weight: 300;
  font-size: ${pxToRem(15)};
  font-style: normal;
  line-height: ${pxToRem(18)};
`

export const LabelS = () => css`
  font-family: 'Ubuntu';
  font-weight: 300;
  font-size: ${pxToRem(12)};
  font-style: normal;
  line-height: ${pxToRem(15)};
`