import * as Yup from 'yup';
import zxcvbn from 'zxcvbn';
import { RegisterFormValues } from './_types';

const MIN_PASSWORD_STRENGTH = 2;

const RegisterFormSchema = Yup.object<RegisterFormValues>({
  email: Yup.string().email().required(),
  password: Yup.string()
    .required()
    .test(
      'strength',
      'Password is not strong enough',
      (val) => zxcvbn(val as string).score >= MIN_PASSWORD_STRENGTH
    ),
  username: Yup.string().required(),
});

export default RegisterFormSchema;
