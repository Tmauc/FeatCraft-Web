import React from 'react';
import styled from 'styled-components';
import { BackHomeStyle, TopStyle, InLiveMembersWrapperStyle } from 'components/pages/Home/Home.style';
import Header from 'components/parts/Header/Header';
import PlayerDescription from 'components/parts/PlayerDescription/PlayerDescription';
import { players } from 'datas/players.js'

function Home() {
  return (
    <BackHome>
      <Header />
      <Top />
      <InLiveMembersWrapper id="players">
        {players.map((player, index) => {
          return (
            <PlayerDescription key={'player'+index} player={player} />
          )
        })}
      </InLiveMembersWrapper>
    </BackHome>
  );
}

const BackHome = styled.div`${BackHomeStyle};`;
const Top = styled.div`${TopStyle};`;
const InLiveMembersWrapper = styled.div`${InLiveMembersWrapperStyle};`;

export default Home;
