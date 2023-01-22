import { Link } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <Link to="/register">Signin</Link>
      <Link to="/login">Log In</Link>
    </div>
  );
};
