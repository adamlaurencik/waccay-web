import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { TextField, Badge } from '@material-ui/core';
import MuiInputAdornment from '@material-ui/core/InputAdornment';
import ErrorIcon from '@material-ui/icons/Error';
import SuccessIcon from '@material-ui/icons/CheckCircle';
import { EnhancedTextFieldProps } from './_types';
import { PasswordField } from '../PasswordField/PasswordField';

const AnimatedTextField = animated(TextField);

const AnimatedPasswordField = animated(PasswordField);

const errorTransform = [
  { transform: 'translateX(5px)' },
  { transform: 'translateX(-5px)' },
  { transform: 'translateX(5px)' },
  { transform: 'translateX(0px)' },
];
const baseTransform = { transform: 'translateX(0px)' };
const springConfig = { duration: 150 };

function EnhancedTextField({
  state,
  Icon,
  variant,
  type,
  ...props
}: EnhancedTextFieldProps): JSX.Element {
  const [errorStyle, setErrorStyle] = useSpring(() => ({
    to: [baseTransform],
    config: springConfig,
  }));

  useEffect(() => {
    setErrorStyle({
      to: state === 'ERROR' ? errorTransform : [baseTransform],
      config: springConfig,
    });
  }, [state, setErrorStyle]);

  let StateIcon = null;
  switch (state) {
    case 'ERROR':
      StateIcon = <ErrorIcon color="error" />;
      break;
    case 'SUCCESS':
      StateIcon = <SuccessIcon style={{ color: 'green' }} />;
      break;
    default:
      StateIcon = null;
  }

  const RootComponent =
    type === 'password' ? AnimatedPasswordField : AnimatedTextField;

  return (
    <RootComponent
      style={errorStyle}
      type={type}
      error={state === 'ERROR'}
      InputProps={{
        startAdornment: (
          <MuiInputAdornment position="start">
            {StateIcon ? (
              <Badge
                badgeContent={StateIcon}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
              >
                <Icon />
              </Badge>
            ) : (
              <Icon />
            )}
          </MuiInputAdornment>
        ),
      }}
      variant={variant}
      {...props}
    />
  );
}

export default EnhancedTextField;
