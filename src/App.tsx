import React from 'react';
import { WaccayApiProvider } from './providers/api/WaccayApi.provider';
import Login from './pages/Login';

function App(): JSX.Element {
  return (
    <WaccayApiProvider>
      <Login />
    </WaccayApiProvider>
  );
}

export default App;
