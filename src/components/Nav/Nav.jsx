import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import s from './Nav.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from '../../redux/auth/operations';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/sliceReact';

export const Nav = () => {
  const { email } = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  return (
    <div className={s.wrapper}>
      <Link className={s.homeLink} to="/">
        Redux
      </Link>
      <div>{email}</div>
      <nav>
        <NavLink className={s.navLink} to="/">
          Home
        </NavLink>
        <NavLink className={s.navLink} to="/main">
          Main
        </NavLink>

        {!isLoggedIn && (
          <>
            <NavLink className={s.navLink} to="/register">
              Register
            </NavLink>
            <NavLink className={s.navLink} to="/login">
              Login
            </NavLink>
          </>
        )}
        {isLoggedIn && (
          <button
            className={s.navButton}
            onClick={() => dispatch(logoutThunk())}
          >
            Logout
          </button>
        )}
      </nav>
    </div>
  );
};
