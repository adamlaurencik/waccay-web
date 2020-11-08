import React from 'react';
import MuiContainer from '@material-ui/core/Container';
import MuiPaper from '@material-ui/core/Paper';
import LockIcon from '@material-ui/icons/LockOutlined';
import MuiAvatar from '@material-ui/core/Avatar';
import MuiTypography from '@material-ui/core/Typography';
import MuiBox from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import useLoginStyles from './Login.styles';
import { LoginFormValues } from './_types';
import LoginForm, { loginInitialValues } from './Login.form';
import LoginFormSchema from './Login.schema';
import { useLogin } from './Login.hook';
import LoadingButton from '../../components/LoadingButton/LoadingButton';

function Login(): JSX.Element {
  const classes = useLoginStyles();
  const { handleLoginSubmit } = useLogin();
  return (
    <MuiContainer className={classes.container} maxWidth={false}>
      <MuiPaper className={classes.paper}>
        <MuiAvatar className={classes.lockIcon}>
          <LockIcon />
        </MuiAvatar>
        <MuiTypography variant="h5">Sign in</MuiTypography>
        <Formik<LoginFormValues>
          initialValues={loginInitialValues}
          onSubmit={handleLoginSubmit}
          validationSchema={LoginFormSchema}
        >
          {(props) => (
            <Form>
              <LoginForm {...props} />
              <LoadingButton
                className={classes.submitButton}
                onClick={props.submitForm}
                loading={props.isSubmitting}
                variant="contained"
                color="primary"
                fullWidth
              >
                Sign in
              </LoadingButton>
            </Form>
          )}
        </Formik>

        <MuiBox display="flex" justifyContent="space-between" width="100%">
          <Link to="/">
            <MuiTypography variant="body2" color="primary">
              Forgot password?
            </MuiTypography>
          </Link>
          <Link to="/register">
            <MuiTypography variant="body2" color="primary">
              Do not have an account? - Register
            </MuiTypography>
          </Link>
        </MuiBox>
      </MuiPaper>
    </MuiContainer>
  );
}

export default Login;
