import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserContext from '../contexts/UserContext';
import styled from '@emotion/styled';
import Header from '../components/Header';
import FullContainer from '../components/FullContainer';
import ProfileImage from '../components/ProfileImage';
import PlayerDropdown from '../components/PlayerDropdown';
import { FooterButtonContainer, CheckButton } from '../components/FooterButton';
import example from '../assets/profile_example.jpg';
import usePatchUser from '../hooks/usePatchUser';
import Loader from '../components/Loader';
import fadeIn from '../animations/fadeIn';
import {
  SearchAnimationLeft,
  SearchAnimationRight,
} from '../components/SearchAnimation';

const ImageBlur = styled.div`
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 40%;
  width: 100%;
  filter: blur(10px);
  margin-top: 70px;
`;

const Image = styled(ProfileImage)`
  top: 15.5vh;
  animation: ${fadeIn} 1s ease 1 forwards;
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
  animation: ${fadeIn} 1s ease 1 forwards;
`;

const PlayerName = styled.p`
  margin: 0px 0px 10px 0px;
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.primary};
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 100px;
`;

const SearchLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  font-size: 1.4rem;
  padding-left: 2.5rem;
  animation: ${fadeIn} 1s ease 1 forwards;
  animation-delay: 0.5s;
  opacity: 0;
  &:active {
    transform: translateY(5px);
    filter: saturate(150%);
  }
`;

export const PseudoAnimation = styled.div`
  width: 18px;
  height: 35px;
  position: relative;
  opacity: 0;
`;

export default function Profile() {
  const loggedInUserId = useContext(UserContext);
  const [player, setPlayer] = useState();
  const [{ loading, error }, doPatchUser] = usePatchUser();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPlayer, setSelectedPlayer] = useState(player);
  const [clickable, setClickable] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [animated, setAnimated] = useState(false);
  const history = useHistory();

  const playerImageSrc = player ? player.img : example;

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
  }, 600);

  function goSearching() {
    setAnimated(!animated);
    setTimeout(function () {
      history.push(`/search`);
    }, 1200);
  }

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
        <ImageBlur src={playerImageSrc} />
        <Image src={playerImageSrc} />
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
            <>
              <Welcome>
                Hello, <PlayerName>{playerName}!</PlayerName>
              </Welcome>
              <Container>
                {animated ? <SearchAnimationLeft /> : <PseudoAnimation />}
                <SearchAnimationRight />
                <SearchLink onClick={goSearching}>Find your partner</SearchLink>
              </Container>
            </>
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
