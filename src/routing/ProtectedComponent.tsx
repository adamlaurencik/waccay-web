import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { WaccayApiContext } from '../providers/api/WaccayApi.context';
import { Routes } from './routes';

export const ProtectedComponent: React.FC = ({ children }) => {
  const { currentUser } = useContext(WaccayApiContext);
  const history = useHistory();

  useEffect(() => {
    if (!currentUser) {
      history.push(Routes.LOGIN);
    }
  }, [currentUser, history]);

  // UNTIL https://github.com/DefinitelyTyped/DefinitelyTyped/issues/18051 gets resolved
  return <>{children}</>;
};
