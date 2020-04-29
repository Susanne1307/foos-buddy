import React from 'react';
import styled from '@emotion/styled';
import Header from '../components/Header';
import FullContainer from '../components/FullContainer';
import example from '../assets/profile_example.jpg';
import ProfileImage from '../components/ProfileImage';
import PlayerDropdown from '../components/PlayerDropdown';
import FooterButton from '../components/FooterButton';

const ImageBlur = styled.div`
  background-image: url(${example});
  background-size: cover;
  background-repeat: no-repeat;
  height: 40%;
  width: 100vw;
  filter: blur(4px);
  margin-top: 65px;
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
  width: 100vw;
`;

const Welcome = styled.p`
  font-size: 1.5rem;
`;

export default function Profile() {
  return (
    <>
      <FullContainer>
        <Header />
        <ImageBlur />
        <Image />
        <InputContainer>
          <Welcome>Who are you?</Welcome>
          <PlayerDropdown />
          <FooterButton></FooterButton>
        </InputContainer>
      </FullContainer>
    </>
  );
}
