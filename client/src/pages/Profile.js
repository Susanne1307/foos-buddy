import React, { useState, useContext } from 'react';
import UserContext from '../contexts/UserContext';
import styled from '@emotion/styled';
import Header from '../components/Header';
import FullContainer from '../components/FullContainer';
import ProfileImage from '../components/ProfileImage';
import PlayerDropdown from '../components/PlayerDropdown';
import FooterButton from '../components/FooterButton';
import example from '../assets/profile_example.jpg';
import usePatchUser from '../hooks/usePatchUser';

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

const InputContainer = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  height: 50%;
`;

export default function Profile() {
  const [loggedInUserId] = useContext(UserContext);
  const [player, setPlayer] = useState();
  const [{ loading, error }, doPatchUser] = usePatchUser();
  const [selectedPlayer, setSelectedPlayer] = React.useState(player);
  const playerImageSrc = player ? player.img : example;

  async function handleSubmit(event) {
    event.preventDefault();
    setSelectedPlayer(selectedPlayer);
    await doPatchUser(loggedInUserId, player);
    alert('Player saved 🙂');
  }
  async function handlePlayerChange(player) {
    setPlayer(player);
  }

  return (
    <>
      <FullContainer>
        <Header />
        {loading}
        {error && 'Error'}
        <ImageBlur src={playerImageSrc} />
        <Image src={playerImageSrc} />
        <InputContainer onSubmit={handleSubmit}>
          <PlayerDropdown value={player} onChange={handlePlayerChange} />
          <FooterButton />
        </InputContainer>
      </FullContainer>
    </>
  );
}
