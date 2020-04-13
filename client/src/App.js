import React from 'react';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import theme from './theme';
import StartAnimation from '../src/components/StartAnimation';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StartAnimation />
    </ThemeProvider>
  );
}

export default App;
