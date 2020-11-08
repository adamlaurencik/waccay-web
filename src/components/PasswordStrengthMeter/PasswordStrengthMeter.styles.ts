import { makeStyles, Theme, createStyles } from '@material-ui/core';
import { PasswordStrengthMeterItemProps } from './_types';

function mapStrengthToColor(type: PasswordStrengthMeterItemProps['score']) {
  switch (type) {
    case 0:
      return 'red';
    case 1:
      return 'red';
    case 2:
      return 'orange';
    case 3:
      return 'green';
    case 4:
      return 'green';
    default:
      return 'gray';
  }
}

const strengthMeterItemBase = {
  width: '100%',
  margin: '0 1px',
  background: 'gray',
  height: '3px',
};

const styles = createStyles({
  strengthMeterItemBase,
  strengthMeterItem: ({ score }: PasswordStrengthMeterItemProps) => ({
    ...strengthMeterItemBase,
    background: mapStrengthToColor(score),
  }),
  strengthMeterText: ({ score }: PasswordStrengthMeterItemProps) => ({
    color: mapStrengthToColor(score),
  }),
  strengthMeterWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    marginLeft: '5px',
  },
  strengthMeterItemWrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

const usePasswordStrengthMeterStyles = makeStyles<
  Theme,
  PasswordStrengthMeterItemProps,
  keyof typeof styles
>(styles);

export default usePasswordStrengthMeterStyles;
