import { makeStyles, Theme } from '@material-ui/core';
import background from '../../assets/images/seaBackground.jpg';

const useLoginStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    opacity: '0.9',
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    maxWidth: '444px',
    width: '100%',
  },
  lockIcon: {
    background: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    position: 'relative',
    bottom: theme.spacing(5),
  },
  submitButton: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
}));

export default useLoginStyles;
