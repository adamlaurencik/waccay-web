import { useContext, useCallback } from 'react';
import { WaccayApiContext } from '../../providers/api/WaccayApi.context';
import { RegisterFormValues } from './_types';

export function useRegister() {
  const { registerUser } = useContext(WaccayApiContext);

  const handleRegisterSubmit = useCallback(
    async (values: RegisterFormValues) => {
      try {
        await registerUser(values);
      } catch (error) {
        // TODO email/username uniqueness verification
      }
    },
    [registerUser]
  );

  return {
    handleRegisterSubmit,
  };
}
