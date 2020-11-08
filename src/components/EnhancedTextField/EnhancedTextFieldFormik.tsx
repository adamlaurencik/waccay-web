import * as React from 'react';
import { FieldProps, getIn } from 'formik';
import { EnhancedTextFieldProps } from './_types';
import EnhancedTextField from './EnhancedTextField';

export interface EnhancedTextFieldFormikProps
  extends FieldProps,
    Omit<EnhancedTextFieldProps, 'name' | 'value' | 'state'> {}

export function fieldToTextField({
  disabled,
  field: { onBlur: fieldOnBlur, ...field },
  form: { isSubmitting, touched, errors },
  onBlur,
  helperText,
  ...props
}: EnhancedTextFieldFormikProps): EnhancedTextFieldProps {
  const fieldError = getIn(errors, field.name);
  const touchedField = getIn(touched, field.name);
  const showError = touchedField && !!fieldError;
  let state: EnhancedTextFieldProps['state'] = 'DEFAULT';
  if (showError && fieldError) {
    state = 'ERROR' as const;
  } else if (touchedField && !fieldError) {
    state = 'SUCCESS' as const;
  }
  return {
    variant: props.variant,
    state,
    helperText: showError ? fieldError : helperText,
    disabled: disabled ?? isSubmitting,
    onBlur:
      onBlur ??
      function fieldOnBlurWrapper(e) {
        fieldOnBlur(e ?? field.name);
      },
    ...field,
    ...props,
  };
}

export function EnhancedTextFieldFormik({
  children,
  ...props
}: EnhancedTextFieldFormikProps): JSX.Element {
  return (
    <EnhancedTextField {...fieldToTextField(props)}>
      {children}
    </EnhancedTextField>
  );
}
