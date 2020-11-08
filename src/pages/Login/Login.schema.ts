import * as Yup from 'yup';
import { LoginFormValues } from './_types';

const LoginFormSchema = Yup.object<LoginFormValues>({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

export default LoginFormSchema;
