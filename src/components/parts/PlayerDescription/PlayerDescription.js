import React from 'react';
import styled from 'styled-components';
import { PlayerDescWrapperStyle, PlayerDescImgStyle, PlayerDescButtonsWrapperStyle, PlayerDescPseudoStyle } from 'components/parts/PlayerDescription/PlayerDescription.style';
import Button from 'components/parts/Button/Button';
import { YoutubeColor, TwitchColor, DiscordColor, TwitterColor } from 'foundation/colors';

function PlayerDescription(props) {
  const randomBackground = Math.floor(Math.random() * 3) + 1;
  return (
    <PlayerDescWrapper randomBackground={randomBackground}>
      <PlayerDescPseudo>{props.player.pseudo}</PlayerDescPseudo>
      <PlayerDescImg src={props.player.skin}></PlayerDescImg>
      <PlayerDescButtonsWrapper>
        {props.player.twitch && <Button label="Twitch" backColor={TwitchColor} url={props.player.twitch} />}
        {props.player.youtube && <Button label="Youtube" backColor={YoutubeColor} url={props.player.youtube} />}
        {props.player.discord && <Button label="Discord" backColor={DiscordColor} url={props.player.twitch} />}
        {props.player.twitter && <Button label="Twitter" backColor={TwitterColor} url={props.player.youtube} />}
      </PlayerDescButtonsWrapper>
    </PlayerDescWrapper>
  );
}

const PlayerDescWrapper = styled.div`${PlayerDescWrapperStyle}`
const PlayerDescImg = styled.img`${PlayerDescImgStyle}`
const PlayerDescButtonsWrapper = styled.div`${PlayerDescButtonsWrapperStyle}`
const PlayerDescPseudo = styled.h1`${PlayerDescPseudoStyle}`

export default PlayerDescription;
