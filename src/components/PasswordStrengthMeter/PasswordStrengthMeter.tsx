import React, { useMemo } from 'react';
import zxcvbn, { ZXCVBNScore } from 'zxcvbn';
import { FormHelperText, Typography } from '@material-ui/core';
import { PasswordStrengthMeterProps } from './_types';
import usePasswordStrengthMeterStyles from './PasswordStrengthMeter.styles';

const MAX_SCORE = 4;

function mapStrengthToText(type: ZXCVBNScore) {
  switch (type) {
    case 0:
      return 'Very weak';
    case 1:
      return 'Weak';
    case 2:
      return 'Fair';
    case 3:
      return 'Good';
    case 4:
      return 'Strong';
    default:
      return '';
  }
}

const PasswordStrengthMeter = ({
  password,
}: PasswordStrengthMeterProps): React.ReactElement => {
  const score = useMemo(() => zxcvbn(password).score, [password]);
  const classes = usePasswordStrengthMeterStyles({ score });
  return (
    <FormHelperText className={classes.strengthMeterWrapper}>
      <div className={classes.strengthMeterItemWrapper}>
        {Array(password ? score + 1 : 0)
          .fill(0)
          .map((_, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={i} className={classes.strengthMeterItem} />
          ))}
        {Array(MAX_SCORE - score)
          .fill(0)
          .map((_, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={i} className={classes.strengthMeterItemBase} />
          ))}
      </div>
      <Typography variant="body2" className={classes.strengthMeterText}>
        {password ? mapStrengthToText(score) : ''}
      </Typography>
    </FormHelperText>
  );
};

export default PasswordStrengthMeter;
