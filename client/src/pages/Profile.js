import React from 'react';
import styled from '@emotion/styled';
import Header from '../components/Header';
import FullContainer from '../components/FullContainer';
import ProfileInfo from '../components/ProfileInfo';
import example from '../assets/profile_example.jpg';

const ImageBlur = styled.div`
  background-image: url(${example});
  background-size: cover;
  background-repeat: no-repeat;
  height: 40vh;
  width: 100vw;
  filter: blur(4px);
  margin-top: 10vh;
  position: relative;
`;

const ProfileImage = styled.div`
  width: 28vh;
  height: 28vh;
  top: 15.5vh;
  background: white;
  border-radius: 50%;
  border: solid 1px ${(props) => props.theme.colors.shadow};
  cursor: pointer;
  position: absolute;
  background-image: url(${example});
  background-size: cover;
`;

const InputContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-evenly;
  height: 50vh;
  width: 80vw;
`;

const Profile = () => {
  return (
    <>
      <FullContainer>
        <Header />
        <ImageBlur />
        <ProfileImage />
        <InputContainer>
          <ProfileInfo>Placeholder for name</ProfileInfo>
          <ProfileInfo>Placeholder for DTFB</ProfileInfo>
          <ProfileInfo>Placeholder for ITSF</ProfileInfo>
        </InputContainer>
      </FullContainer>
    </>
  );
};

export default Profile;
