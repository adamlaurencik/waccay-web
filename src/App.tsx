import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { WaccayApiProvider } from './providers/api/WaccayApi.provider';
import { routes, Routes } from './routing/routes';
import { ProtectedComponent } from './routing/ProtectedComponent';

function App(): JSX.Element {
  return (
    <Router>
      <WaccayApiProvider>
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              component={
                route.public
                  ? route.component
                  : () => (
                      <ProtectedComponent>{route.component}</ProtectedComponent>
                    )
              }
            />
          ))}
          <Redirect to={Routes.LOGIN} />
        </Switch>
      </WaccayApiProvider>
    </Router>
  );
}

export default App;
