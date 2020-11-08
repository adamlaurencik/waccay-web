import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { WaccayApiContext } from '../providers/api/WaccayApi.context';
import { Routes } from './routes';

export function useRouteProtection(): void {
  const { currentUser } = useContext(WaccayApiContext);
  const history = useHistory();

  useEffect(() => {
    if (!currentUser) {
      history.push(Routes.LOGIN);
    }
  }, [currentUser, history]);
}
