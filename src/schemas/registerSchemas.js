import * as yup from 'yup';

export const registerSchema = yup.object({
  name: yup
    .string()
    .required('Field is required!')
    .max(15, 'Must be less than 15 chars')
    .min(3, 'Name must be more than 3 chars.'),
  password: yup
    .string()
    .required()
    .max(15, 'Must be less than 15 chars')
    .min(6, 'Pass must be more than 3 chars.'),
  email: yup.string().required().email('Email is not valid'),
});
