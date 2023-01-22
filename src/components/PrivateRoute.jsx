import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { selectAuth } from 'redux/selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const authState = useSelector(selectAuth);
  return !authState.isLoggedIn && !authState.isRefreshing ? (
    <Navigate to={redirectTo} />
  ) : (
    <Component />
  );
};
