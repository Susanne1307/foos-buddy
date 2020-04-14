import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import theme from './theme';
import Start from '../src/pages/Start';
import Login from '../src/pages/Login';

const [test, setTest] = React.useState(null);

React.useEffect(() => {
  fetch('/api/test')
    .then((response) => response.json())
    .then((result) => {
      setTest(result);
    });
}, []);

function App() {
  return (
    <>
      {test && (
        <div>
          {test.title}: {test.message}
        </div>
      )}
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>
          <Switch>
            <Route exact path="/">
              <Start />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
