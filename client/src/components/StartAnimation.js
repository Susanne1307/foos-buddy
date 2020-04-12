import React from 'react';
import styled from '@emotion/styled';
import leo1 from '../assets/leo1.svg';
import leo2 from '../assets/leo2.svg';
import { Foos, Buddy } from '../components/Title';

export const AnimationContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 100px;
`;

export const StartAnimationLeft = styled.div`
  display: inline-block;
  width: 82px;
  height: 172px;
  position: relative;
  opacity: 0;
  background-image: url(${leo1});
  animation-name: startanimationleft;
  animation-duration: 0.6s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
  @keyframes startanimationleft {
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
  }
`;

export const StartAnimationRight = styled.div`
  float: right;
  width: 82px;
  height: 172px;
  position: relative;
  opacity: 0;
  background-image: url(${leo2});
  animation-name: startanimationright;
  animation-duration: 0.6s;
  animation-delay: 1s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
  @keyframes startanimationright {
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
  }
`;

export const StartAnimationTitle = styled.p`
  position: relative;
  text-align: center;
  opacity: 0;
  top: 0px;
  margin-top: 80px;
  animation-name: startanimationtitle;
  animation-duration: 1.5s;
  animation-delay: 2s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
  @keyframes startanimationtitle {
    0% {
      top: 0;
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

const StartAnimation = () => (
  <AnimationContainer>
    <StartAnimationLeft />
    <StartAnimationRight />
    <StartAnimationTitle>
      <Foos>Foos</Foos>
      <Buddy>Buddy</Buddy>
    </StartAnimationTitle>
  </AnimationContainer>
);

export default StartAnimation;
