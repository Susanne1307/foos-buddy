import React from 'react';
import styled from '@emotion/styled';
import leo1 from '../assets/leo1.svg';
import leo2 from '../assets/leo2.svg';
import Title from './Title';
import bounce from '../animations/bounce';
import { startLeft, startRight } from '../animations/slideIn';

const AnimationContainer = styled.div`
  width: 100vw;
`;

const StartAnimationLeft = styled.div`
  width: 82px;
  height: 172px;
  position: relative;
  opacity: 0;
  margin-top: 10vh;
  display: inline-block;
  background-image: url(${leo1});
  animation: ${startLeft} 0.6s ease-in-out 1 forwards;
`;

const StartAnimationRight = styled.div`
  width: 82px;
  height: 172px;
  position: relative;
  opacity: 0;
  margin-top: 10vh;
  float: right;
  background-image: url(${leo2});
  animation: ${startRight} 0.6s ease-in-out 1 forwards;
  animation-delay: 1s;
`;

const StartAnimationTitle = styled.p`
  position: relative;
  text-align: center;
  opacity: 0;
  margin-top: 7vh;
  animation: ${bounce} 1s ease-in 1;
  animation-delay: 2s;
  animation-fill-mode: forwards;
`;

const StartAnimation = () => {
  return (
    <>
      <AnimationContainer>
        <StartAnimationLeft />
        <StartAnimationRight />
      </AnimationContainer>
      <StartAnimationTitle>
        <Title />
      </StartAnimationTitle>
    </>
  );
};

export default StartAnimation;
