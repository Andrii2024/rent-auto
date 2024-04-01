import React from 'react';
import { Triangle } from 'react-loader-spinner';
import s from './Preloader.module.css';
export const Preloader = () => {
  return (
    <div className={s.wrapper}>
      <Triangle
        visible={true}
        height="380"
        width="380"
        color="#5ae02a"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
      <h1>Loading...</h1>
    </div>
  );
};
