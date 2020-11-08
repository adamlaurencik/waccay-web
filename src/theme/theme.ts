import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  overrides: {
    MuiBadge: {
      badge: {
        '& .MuiSvgIcon-root': {
          width: '0.65em',
          height: '0.65em',
        },
      },
    },
  },
});

export default theme;
