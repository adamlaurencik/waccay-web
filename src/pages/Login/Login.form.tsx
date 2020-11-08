import React from 'react';
import EmailIcon from '@material-ui/icons/AlternateEmail';
import PasswordIcon from '@material-ui/icons/VpnKey';
import { FormikProps, Field } from 'formik';
import { LoginFormValues } from './_types';
import { EnhancedTextFieldFormik } from '../../components/EnhancedTextField/EnhancedTextFieldFormik';
import { useFormikErrorFocus } from '../../hooks/useFormikErrorFocus';

type LoginFormProps<FormType extends LoginFormValues> = FormikProps<FormType>;

export const loginInitialValues: LoginFormValues = {
  email: '',
  password: '',
};

function LoginForm<FormType extends LoginFormValues>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  props: LoginFormProps<FormType>
): JSX.Element {
  useFormikErrorFocus();
  return (
    <>
      <Field
        component={EnhancedTextFieldFormik}
        variant="outlined"
        name="email"
        label="Email address"
        type="email"
        required
        fullWidth
        margin="normal"
        Icon={EmailIcon}
      />
      <Field
        component={EnhancedTextFieldFormik}
        variant="outlined"
        label="Password"
        type="password"
        name="password"
        required
        fullWidth
        Icon={PasswordIcon}
        margin="normal"
      />
    </>
  );
}

export default LoginForm;
