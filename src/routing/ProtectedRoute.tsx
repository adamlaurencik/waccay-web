import React from 'react';
import { useRouteProtection } from './ProtectedRoute.hook';

export const ProtectedComponent: React.FC = ({ children }) => {
  useRouteProtection();
  // UNTIL https://github.com/DefinitelyTyped/DefinitelyTyped/issues/18051 gets resolved
  return <>{children}</>;
};
