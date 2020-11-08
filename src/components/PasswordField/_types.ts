import { TextFieldProps } from '@material-ui/core';

export type PasswordFieldProps = Omit<TextFieldProps, 'type'> & {
  includeMeter?: boolean;
};
