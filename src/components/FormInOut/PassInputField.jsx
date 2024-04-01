import React, { useState } from 'react';
import s from './FormInOut.module.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
export const PassInputField = ({
  register,
  errors,
  label,
  name,
  placeholder,
}) => {
  const [type, setType] = useState('password');

  return (
    <div className={s.inputField}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        placeholder={placeholder}
        {...register(name)}
        type={type}
      />
      <div
        onClick={() => setType(type === 'password' ? 'text' : 'password')}
        className={s.iconBtn}
      >
        {type === 'password' ? <FaEyeSlash /> : <FaEye />}
      </div>
      {errors[name] && <span>{errors[name].message}</span>}
    </div>
  );
};
