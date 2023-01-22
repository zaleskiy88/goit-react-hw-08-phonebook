import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { selectAuth } from 'redux/selectors';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const authState = useSelector(selectAuth);

  return authState.isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};
