import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import {
  SharedLayout,
  Home,
  Login,
  Signup,
  Phonebook,
  ErrorPage,
  selectAuth,
  refreshUser,
  RestrictedRoute,
  PrivateRoute,
} from 'index';
///////////////

export const App = () => {
  const authState = useSelector(selectAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {!authState.isRefreshing && (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />

            <Route
              path="contacts"
              element={<PrivateRoute component={Phonebook} />}
            />

            <Route
              path="login"
              element={
                <RestrictedRoute component={Login} redirectTo="/contacts" />
              }
            />
            <Route
              path="register"
              element={
                <RestrictedRoute component={Signup} redirectTo="/contacts" />
              }
            />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      )}
      <Toaster />
    </>
  );
};
