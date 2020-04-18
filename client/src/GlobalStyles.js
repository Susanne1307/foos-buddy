import React from 'react';
import { Global, css } from '@emotion/core';

function GlobalStyles() {
  return (
    <Global
      styles={(theme) => css`
        @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap');
        *,
        *::after,
        *::before {
          box-sizing: border-box;
        }
        body {
          font-family: 'Montserrat', sans-serif;
          font-size: 16px;
          margin: 0px;
          background: ${theme.colors.basics};
          color: ${theme.colors.textPrimary};
        }
      `}
    />
  );
}
export default GlobalStyles;
