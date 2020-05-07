import { keyframes } from '@emotion/core';

export const startLeft = keyframes`
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

export const startRight = keyframes`
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

export const menuAnimation = keyframes`
from {
transform: translateX(-100%);
} to {
  transform: translateX(0);
}
`;

export const menuItemAnimation = keyframes`
from {
  transform: translateY(60%);
  opacity: 0
} to  {
  transform: translateY(0);
  opacity: 1;
}
`;

export const searchListAnimation = keyframes`
from {
  transform: translateX(60%);
  opacity: 0
} to  {
  transform: translateX(0);
  opacity: 1;
}
`;
