import { Layout } from 'components/Layout';
import React, { useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import { Home, Login, Main, NotFound, Register } from 'pages';
import { useDispatch, useSelector } from 'react-redux';
import { Preloader } from './components/Preloader/Preloader';
import { PrivateRoute } from './routes/PrivateRoute';
import { PublicRoute } from './routes/PublicRoute';
import { refreshThunk } from './redux/auth/operations';
import { selectIsRefresh } from './redux/auth/sliceReact';
import './index.css';

export const App = () => {
  const isRefresh = useSelector(selectIsRefresh);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return isRefresh ? (
    <Preloader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="main"
          element={
            <PrivateRoute>
              <Main />
            </PrivateRoute>
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
