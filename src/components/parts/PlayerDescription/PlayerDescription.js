import React from 'react';
import styled from 'styled-components';
import { PlayerDescriptionWrapperStyle, PlayerDescriptionImgStyle, PlayerDescriptionPagesStyle, PlayerDescriptionPseudoStyle } from 'components/parts/PlayerDescription/PlayerDescription.style';
import Button from 'components/parts/Button/Button';
import { YoutubeColor, TwitchColor } from 'foundation/colors';

function PlayerDescription(props) {
  const randomBackground = Math.floor(Math.random() * 3) + 1;
  return (
    <PlayerDescriptionWrapper randomBackground={randomBackground}>
      <PlayerDescriptionPseudo>{props.player.pseudo}</PlayerDescriptionPseudo>
      <PlayerDescriptionImg src={props.player.skin}></PlayerDescriptionImg>
      <PlayerDescriptionPages>
        {props.player.twitch && <Button label="Twitch" backColor={TwitchColor} url={props.player.twitch} />}
        {props.player.youtube && <Button label="Youtube" backColor={YoutubeColor} url={props.player.youtube} />}
      </PlayerDescriptionPages>
    </PlayerDescriptionWrapper>
  );
}

const PlayerDescriptionWrapper = styled.div`${PlayerDescriptionWrapperStyle}`
const PlayerDescriptionImg = styled.img`${PlayerDescriptionImgStyle}`
const PlayerDescriptionPages = styled.div`${PlayerDescriptionPagesStyle}`
const PlayerDescriptionPseudo = styled.h1`${PlayerDescriptionPseudoStyle}`

export default PlayerDescription;
