import React from 'react';
import { Button, CircularProgress } from '@material-ui/core';
import { LoadingButtonProps } from './_types';
import useLoadingButtonStyles from './LoadingButton.styles';

const LoadingButton: React.FC<LoadingButtonProps> = ({
  loading,
  disabled,
  className,
  ...props
}) => {
  const classes = useLoadingButtonStyles();
  return (
    <div className={`${className} ${classes.wrapper}`}>
      <Button {...props} disabled={loading || disabled} />
      {loading && (
        <CircularProgress size={24} className={classes.buttonProgress} />
      )}
    </div>
  );
};

export default LoadingButton;
