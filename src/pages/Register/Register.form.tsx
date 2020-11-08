import React from 'react';
import EmailIcon from '@material-ui/icons/AlternateEmail';
import UsernameIcon from '@material-ui/icons/Face';
import PasswordIcon from '@material-ui/icons/VpnKey';
import { FormikProps, Field } from 'formik';
import { RegisterFormValues } from './_types';
import { EnhancedTextFieldFormik } from '../../components/EnhancedTextField/EnhancedTextFieldFormik';
import { useFormikErrorFocus } from '../../hooks/useFormikErrorFocus';

type RegisterFormProps<FormType extends RegisterFormValues> = FormikProps<
  FormType
>;

export const registerInitialValues: RegisterFormValues = {
  email: '',
  password: '',
  username: '',
};

function RegisterForm<FormType extends RegisterFormValues>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  props: RegisterFormProps<FormType>
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
        name="username"
        label="Username"
        required
        fullWidth
        margin="normal"
        Icon={UsernameIcon}
      />
      <Field
        component={EnhancedTextFieldFormik}
        variant="outlined"
        label="Password"
        type="password"
        name="password"
        required
        fullWidth
        includeMeter
        Icon={PasswordIcon}
        margin="normal"
      />
    </>
  );
}

export default RegisterForm;
