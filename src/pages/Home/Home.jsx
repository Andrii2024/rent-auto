import React from 'react';
import s from './Home.module.css';
export const Home = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Welcome to phone book</h1>
      <h2 className={s.title}>
        After registration, you will have access to a closed book of contacts!
      </h2>
    </div>
  );
};
