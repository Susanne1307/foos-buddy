import React, { useState } from 'react';
import styled from '@emotion/styled';
import Header from '../components/Header';
import FullContainer from '../components/FullContainer';
import ProfileImage from '../components/ProfileImage';
import PlayerDropdown from '../components/PlayerDropdown';
import FooterButton from '../components/FooterButton';
import example from '../assets/profile_example.jpg';

const ImageBlur = styled.div`
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 40%;
  width: 100%;
  filter: blur(10px);
  margin-top: 60px;
`;

const Image = styled(ProfileImage)`
  top: 15.5vh;
`;

const InputContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  height: 50%;
`;

const Welcome = styled.p`
  font-size: 1.5rem;
`;

export default function Profile() {
  const [player, setPlayer] = useState();

  const handlePlayerChange = (player) => {
    setPlayer(player);
  };
  const playerImageSrc = player ? player.img : example;

  return (
    <>
      <FullContainer>
        <Header />
        <ImageBlur src={playerImageSrc} />
        <Image src={playerImageSrc} />
        <InputContainer>
          <Welcome>What&apos;s your name?</Welcome>
          <PlayerDropdown value={player} onChange={handlePlayerChange} />
          <FooterButton />
        </InputContainer>
      </FullContainer>
    </>
  );
}
