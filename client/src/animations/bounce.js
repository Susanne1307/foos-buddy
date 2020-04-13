import { keyframes } from '@emotion/core';

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

export default bounce;
