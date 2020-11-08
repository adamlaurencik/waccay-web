import React from 'react';
import MuiContainer from '@material-ui/core/Container';
import MuiPaper from '@material-ui/core/Paper';
import LockIcon from '@material-ui/icons/LockOutlined';
import MuiAvatar from '@material-ui/core/Avatar';
import MuiTypography from '@material-ui/core/Typography';
import MuiBox from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import useRegisterStyles from './Register.styles';
import { RegisterFormValues } from './_types';
import RegisterForm, { registerInitialValues } from './Register.form';
import RegisterFormSchema from './Register.schema';
import { useRegister } from './Register.hook';
import LoadingButton from '../../components/LoadingButton/LoadingButton';

function Register(): JSX.Element {
  const classes = useRegisterStyles();
  const { handleRegisterSubmit } = useRegister();
  return (
    <MuiContainer className={classes.container} maxWidth={false}>
      <MuiPaper className={classes.paper}>
        <MuiAvatar className={classes.lockIcon}>
          <LockIcon />
        </MuiAvatar>
        <MuiTypography variant="h5">Register </MuiTypography>
        <Formik<RegisterFormValues>
          initialValues={registerInitialValues}
          onSubmit={handleRegisterSubmit}
          validationSchema={RegisterFormSchema}
        >
          {(props) => (
            <Form>
              <RegisterForm {...props} />
              <LoadingButton
                className={classes.submitButton}
                onClick={props.submitForm}
                loading={props.isSubmitting}
                variant="contained"
                color="primary"
                fullWidth
              >
                Register
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
          <Link to="/login">
            <MuiTypography variant="body2" color="primary">
              Already have an account? - Login
            </MuiTypography>
          </Link>
        </MuiBox>
      </MuiPaper>
    </MuiContainer>
  );
}

export default Register;
