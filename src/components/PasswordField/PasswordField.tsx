import React, { useState, useCallback } from 'react';
import { TextField, IconButton } from '@material-ui/core';
import ToggleVisibleIcon from '@material-ui/icons/Visibility';
import ToggleHiddenIcon from '@material-ui/icons/VisibilityOff';
import MuiInputAdornment from '@material-ui/core/InputAdornment';
import { PasswordFieldProps } from './_types';
import PasswordStrengthMeter from '../PasswordStrengthMeter/PasswordStrengthMeter';

export const PasswordField: React.FC<PasswordFieldProps> = ({
  InputProps,
  variant,
  value,
  helperText,
  includeMeter,
  ...props
}) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = useCallback(() => {
    setVisible((current) => !current);
  }, [setVisible]);

  return (
    <>
      <TextField
        {...props}
        value={value}
        variant={variant}
        type={visible ? undefined : 'password'}
        helperText={includeMeter ? '' : helperText}
        InputProps={{
          ...InputProps,
          endAdornment: (
            <MuiInputAdornment position="end">
              <IconButton onClick={toggleVisible}>
                {visible ? <ToggleVisibleIcon /> : <ToggleHiddenIcon />}
              </IconButton>
            </MuiInputAdornment>
          ),
        }}
      />
      {includeMeter ? (
        <PasswordStrengthMeter password={value as string} />
      ) : null}
    </>
  );
};
