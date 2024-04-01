import React from 'react';
import s from './FormInOut.module.css';
export const InputField = ({ register, errors, label, name, placeholder }) => {
  return (
    <div className={s.inputField}>
      <label htmlFor={name}>{label}</label>
      <input id={name} placeholder={placeholder} {...register(name)} />
      {errors[name] && <span>{errors[name].message}</span>}
    </div>
  );
};
