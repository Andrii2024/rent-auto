import * as yup from 'yup';

export const loginSchema = yup.object({
  password: yup
    .string()
    .required()
    .max(15, 'Must be less than 15 chars')
    .min(6, 'Pass must be more than 3 chars.'),
  email: yup.string().required().email('Email is not valid'),
});
