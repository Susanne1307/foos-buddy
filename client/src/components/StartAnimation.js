import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import leo1 from '../assets/leo1.svg';
import leo2 from '../assets/leo2.svg';
import { Foos, Buddy } from '../components/Title';

const startLeft = keyframes`
0% {
  opacity: 0;
  left: 0px;
  top: 0px;
}
100% {
  opacity: 1;
  left: calc(50% - 80px);
  top: 0px;
}
`;

const startRight = keyframes`
    0% {
      opacity: 1;
      right: 0px;
      top: 0px;
    }
    100% {
      opacity: 1;
      right: calc(50% - 82px);
      top: 0px;
    }
`;

const bounce = keyframes`
0% {
      font-size: 5rem;
      opacity: 0;
    }
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
      opacity: 1;
      font-size: 4rem;
    }
    40% {
      transform: translateY(-50px);
    }
    60% {
      transform: translateY(-35px);
    }
    90% {
      transform: translateY(-5px);
    }
  }
`;

const AnimationContainer = styled.div`
  width: 82px;
  height: 172px;
  position: relative;
  opacity: 0;
  margin-top: 100px;
`;

const StartAnimationLeft = styled(AnimationContainer)`
  display: inline-block;
  background-image: url(${leo1});
  animation: ${startLeft} 0.6s ease-in 1 forwards;
`;

const StartAnimationRight = styled(AnimationContainer)`
  float: right;
  background-image: url(${leo2});
  animation: ${startRight} 0.6s ease-in 1 forwards;
  animation-delay: 1s;
`;

const StartAnimationTitle = styled.p`
  position: relative;
  text-align: center;
  opacity: 0;
  margin-top: 80px;
  animation: ${bounce} 1s ease-in 1;
  animation-delay: 2s;
  animation-fill-mode: forwards;
`;

const StartAnimation = () => (
  <>
    <StartAnimationLeft />
    <StartAnimationRight />
    <StartAnimationTitle>
      <Foos>Foos</Foos>
      <Buddy>Buddy</Buddy>
    </StartAnimationTitle>
  </>
);

export default StartAnimation;
