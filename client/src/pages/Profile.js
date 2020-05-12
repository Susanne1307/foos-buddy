import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import UserContext from '../contexts/UserContext';
import styled from '@emotion/styled';
import Header from '../components/Header';
import FullContainer from '../components/FullContainer';
import ProfileImage from '../components/ProfileImage';
import PlayerDropdown from '../components/PlayerDropdown';
import { FooterButtonContainer, CheckButton } from '../components/FooterButton';
import usePatchUser from '../hooks/usePatchUser';
import Loader from '../components/Loader';
import fadeIn from '../animations/fadeIn';
import useGetUserById from '../hooks/useGetUserById';

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
  animation: ${fadeIn} 2s ease 1 forwards;
`;

const InputContainer = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  height: 50%;
  width: 90%;
  max-width: 370px;
  > * {
    margin-top: 60px;
  }
`;

const Welcome = styled.div`
  text-align: center;
  font-size: 2.5rem;
  animation: ${fadeIn} 2s ease 1 forwards;
`;

const PlayerName = styled.p`
  margin: auto;
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.primary};
`;

export default function Profile() {
  const loggedInUserId = useContext(UserContext);
  const [player, setPlayer] = useState();
  const [{ loading, error }, doPatchUser] = usePatchUser();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPlayer, setSelectedPlayer] = useState(player);
  const [clickable, setClickable] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [{ user, srcError, srcLoading }] = useGetUserById(loggedInUserId);

  async function handleSubmit(event) {
    event.preventDefault();
    setSelectedPlayer(selectedPlayer);
    await doPatchUser(loggedInUserId, player);
    showWelcome();
  }

  function handlePlayerChange(player) {
    setPlayer(player);
    setClickable(true);
  }

  const reg = RegExp(/(?<=,\s).*/);
  const playerName = player ? player.name.match(reg) : '';

  const showWelcome = () => {
    setIsVisible(false);
  };

  setTimeout(function () {
    setIsLoading(false);
  }, 800);

  if (isLoading) {
    return (
      <FullContainer>
        <Loader />
      </FullContainer>
    );
  }

  return (
    <>
      <FullContainer>
        <Header />
        {srcLoading && <Loader />}
        {srcError && 'Error'}
        <ImageBlur src={player ? player.img : user.player.img} />
        <Image src={player ? player.img : user.player.img} />
        {loading && <Loader />}
        {error && 'Error'}
        <InputContainer onSubmit={handleSubmit}>
          {isVisible ? (
            <>
              <PlayerDropdown value={player} onChange={handlePlayerChange} />
              <FooterButtonContainer>
                <CheckButton disabled={clickable ? false : true} />
              </FooterButtonContainer>
            </>
          ) : (
            <Welcome>
              Hello, <PlayerName>{playerName}!</PlayerName>
            </Welcome>
          )}
        </InputContainer>
      </FullContainer>
    </>
  );
}

Profile.propTypes = {
  theme: PropTypes.string,
  colors: PropTypes.string,
  primary: PropTypes.string,
};
