import React from 'react';
import { useWaccayApi } from './WaccayApi.hook';
import { WaccayApiContext } from './WaccayApi.context';

export const WaccayApiProvider: React.FC = ({ children }) => {
  const data = useWaccayApi();
  return (
    <WaccayApiContext.Provider value={data}>
      {children}
    </WaccayApiContext.Provider>
  );
};
