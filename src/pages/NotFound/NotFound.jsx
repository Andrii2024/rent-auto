import React from 'react';
import { Link } from 'react-router-dom';
import s from './NotFound.module.css';
export const NotFound = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.error}>Page is not found... Try again!</h1>
      <Link className={s.linkhome} to="/">
        Go home!
      </Link>
    </div>
  );
};
