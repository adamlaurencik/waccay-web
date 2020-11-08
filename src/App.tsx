import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { WaccayApiProvider } from './providers/api/WaccayApi.provider';
import { routes, Routes } from './routing/routes';
import { ProtectedComponent } from './routing/ProtectedRoute';
import theme from './theme/theme';

function App(): JSX.Element {
  return (
    <Router>
      <CssBaseline />
      <WaccayApiProvider>
        <ThemeProvider theme={theme}>
          <Switch>
            {routes.map((route) => {
              const component = route.public
                ? route.component
                : () => (
                    <ProtectedComponent>{route.component}</ProtectedComponent>
                  );
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  component={component}
                />
              );
            })}
            )
            <Redirect to={Routes.LOGIN} />
          </Switch>
        </ThemeProvider>
      </WaccayApiProvider>
    </Router>
  );
}

export default App;
