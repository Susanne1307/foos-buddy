import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavigationProvider } from './NavigationContext';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import theme from './theme';
import Start from './pages/Start';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

function App() {
  return (
    <>
      <NavigationProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Router>
            <Switch>
              <Route exact path="/">
                <Start />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
            </Switch>
          </Router>
        </ThemeProvider>
      </NavigationProvider>
    </>
  );
}

export default App;
