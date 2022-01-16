import React from 'react';
import styled from 'styled-components';
import { ButtonWrapperStyle, ButtonLabelStyle } from 'components/parts/Button/Button.style';

const buttonOnClick = (url) => {
  window.open(url, '_blank');
}

function Button(props) {
  return (
    <ButtonWrapper backColor={props.backColor} onClick={() => buttonOnClick(props.url)}>
      <ButtonLabel>{props.label}</ButtonLabel>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.button`${ButtonWrapperStyle}`
const ButtonLabel = styled.h1`${ButtonLabelStyle}`

export default Button;
