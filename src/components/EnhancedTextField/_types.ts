import { TextFieldProps, SvgIconProps } from '@material-ui/core';

export type EnhancedTextFieldProps = {
  state: 'SUCCESS' | 'DEFAULT' | 'ERROR';
  Icon: (props: SvgIconProps) => JSX.Element;
} & Omit<TextFieldProps, 'error' | 'InputProps'>;
