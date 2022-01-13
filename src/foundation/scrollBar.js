import { grey40, grey60 } from './Colors/colors';
import { pxToRem } from './scalings';

export function ScrollBar() {
  return `
  &::-webkit-scrollbar {
    width: ${pxToRem(15)};
  }

  &::-webkit-scrollbar-button {
    display: none;
  }

  &::-webkit-scrollbar-track {
    display:none;
    padding: ${pxToRem(50)};
    margin: ${pxToRem(50)};
  }

  &::-webkit-scrollbar-thumb {
    background: hsl(${grey40});
    border: ${pxToRem(5)} solid rgba(0, 0, 0, 0);
    border-radius: ${pxToRem(10)};
    background-clip: padding-box;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: hsl(${grey60});
    background-clip: padding-box;
  }
  `;
}