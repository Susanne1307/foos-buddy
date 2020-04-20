import React from 'react';
import styled from '@emotion/styled';
import Header from '../components/Header';
import FullContainer from '../components/FullContainer';
import ProfileInfo from '../components/ProfileInfo';
import example from '../assets/profile_example.jpg';
import ProfileImage from '../components/ProfileImage';

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
  align-items: center;
  justify-content: space-evenly;
  height: 50%;
  width: 80vw;
`;

const info = [
  'Placeholder for name',
  'Placeholder for DTFB',
  'Placeholder for ITSF',
];

const ProfileInfos = () => {
  return info.map((info) => <ProfileInfo key={info}>{info}</ProfileInfo>);
};

export default function Profile() {
  return (
    <>
      <FullContainer>
        <Header />
        <ImageBlur />
        <Image />
        <InputContainer>
          <ProfileInfos></ProfileInfos>
        </InputContainer>
      </FullContainer>
    </>
  );
}
