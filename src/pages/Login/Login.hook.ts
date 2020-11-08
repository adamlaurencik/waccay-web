import { useContext, useCallback } from 'react';
import { FormikHelpers } from 'formik';
import { WaccayApiContext } from '../../providers/api/WaccayApi.context';
import { LoginFormValues } from './_types';

export function useLogin() {
  const { loginWithEmailAndPassword } = useContext(WaccayApiContext);

  const handleLoginSubmit = useCallback(
    async (
      values: LoginFormValues,
      formikHelpers: FormikHelpers<LoginFormValues>
    ) => {
      try {
        await loginWithEmailAndPassword(values.email, values.password);
      } catch (error) {
        const errorCode = error.code;
        if (errorCode === 'auth/wrong-password') {
          formikHelpers.setFieldError('password', 'Invalid credentials');
        }
      }
    },
    [loginWithEmailAndPassword]
  );

  return {
    handleLoginSubmit,
  };
}
