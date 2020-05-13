import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import leo1 from '../assets/leo1.svg';
import leo2 from '../assets/leo2.svg';
import fadeIn from '../animations/fadeIn';

export const startLeft = keyframes`
0% {
  opacity: 1;
      left: 0px;
}
100% {
  opacity: 1;
  left: 12px;
}
`;

export const SearchAnimationLeft = styled.div`
  width: 18px;
  height: 35px;
  position: relative;
  opacity: 0;
  background-image: url(${leo2});
  animation: ${startLeft} 0.2s ease-in 1 forwards;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const SearchAnimationRight = styled.div`
  width: 18px;
  height: 35px;
  position: relative;
  left: 10px;
  opacity: 0;
  display: inline-block;
  background-image: url(${leo1});
  background-repeat: no-repeat;
  background-size: contain;
  animation: ${fadeIn} 1s ease 1 forwards;
  animation-delay: 0.5s;
`;
