import React from 'react';
import { useForm } from 'react-hook-form';
import s from '../FormInOut/FormInOut.module.css';
import { Link } from 'react-router-dom';

import { yupResolver } from '@hookform/resolvers/yup';
import { PassInputField } from './PassInputField';
import { InputField } from './inputField';

export const Form = ({ onDataSubmit, formType, values, schema }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: values,
    resolver: yupResolver(schema),
  });

  const submit = data => {
    onDataSubmit(data);
    reset();
  };

  return (
    <div className={s.wrapperForm}>
      <form className={s.form} onSubmit={handleSubmit(submit)}>
        {formType !== 'login' && (
          <InputField
            register={register}
            errors={errors}
            label="Name:"
            placeholder="Enter name"
            name="name"
          />
        )}
        <InputField
          register={register}
          errors={errors}
          label="Email:"
          placeholder="Enter email"
          name="email"
        />

        <PassInputField
          register={register}
          errors={errors}
          label="Password:"
          placeholder="Enter password"
          name="password"
        />
        {/* <PassInputField
          register={register}
          errors={errors}
          label="Confirm pass:"
          placeholder="Enter password"
          name="confirmPassword"
        /> */}
        <button>{formType === 'login' ? 'Login' : 'Register'}</button>
        <p className={s.link}>
          {formType !== 'login'
            ? 'You already have account?'
            : 'You do not have account?'}
          {formType === 'login' ? (
            <Link to="/register">Sign in!</Link>
          ) : (
            <Link to="/login">Sign up!</Link>
          )}
        </p>
      </form>
    </div>
  );
};
