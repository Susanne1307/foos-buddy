import React from 'react';
import {
  AnimationContainer,
  StartAnimationRight,
  StartAnimationLeft,
  StartAnimationTitle,
} from '../components/StartAnimation';
import { Foos, Buddy } from '../components/Title';

export default {
  title: 'Animation',
};

export const animating = () => (
  <AnimationContainer>
    <StartAnimationLeft />
    <StartAnimationRight />
    <StartAnimationTitle>
      <Foos>Foos</Foos>
      <Buddy>Buddy</Buddy>
    </StartAnimationTitle>
  </AnimationContainer>
);
