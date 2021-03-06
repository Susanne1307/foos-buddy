import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserProvider from './contexts/UserProvider';
import NavigationProvider from './contexts/NavigationProvider';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import theme from './theme';
import Start from './pages/Start';
import Login from './pages/Login';
import Register from './pages/Register';
import Overview from './pages/SearchList';
import Profile from './pages/Profile';
import Search from './pages/Search';
import Logout from './pages/Logout';

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
              <UserProvider>
                <Route path="/searchlist">
                  <Overview />
                </Route>
                <Route path="/profile">
                  <Profile />
                </Route>
                <Route path="/search">
                  <Search />
                </Route>
              </UserProvider>
              <Route path="/logout">
                <Logout />
              </Route>
            </Switch>
          </Router>
        </ThemeProvider>
      </NavigationProvider>
    </>
  );
}

export default App;
