import { Navigation, AuthNav, UserMenu, selectAuth } from 'index';
import { useSelector } from 'react-redux';
import { Header } from './AppBar.styled';
/////

export const AppBar = () => {
  const state = useSelector(selectAuth);

  return (
    <Header>
      <Navigation />
      {state.isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
